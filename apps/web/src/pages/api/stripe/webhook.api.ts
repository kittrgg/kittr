import fetch from "@Fetch"
import { createHandler } from "@Middlewares/createHandler"
import Channel from "@Services/mongodb/models/Channel"
import { buffer } from "micro"
import mongoose from "mongoose"
import type { NextApiRequest, NextApiResponse } from "next"
import Stripe from "stripe"

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, { apiVersion: "2020-08-27" })

export const config = {
	api: {
		bodyParser: false
	}
}

const handler = createHandler()

// Stripe webhook
handler.post(async (req: NextApiRequest, res: NextApiResponse) => {
	const sig = req.headers["stripe-signature"] as string
	const buf = await buffer(req)

	let event: Stripe.Event

	const localURL = process.env.NODE_ENV === "development" ? "http://api:5000/stripe-webhook-reporter" : ""
	const apiURL = process.env.NEXT_PUBLIC_ENABLE_SEEDING === "true" ? "stage-api" : "api"

	try {
		event = stripe.webhooks.constructEvent(buf, sig, process.env.STRIPE_WEBHOOK_SECRET as string)

		// Handle the event
		switch (event.type) {
			case "checkout.session.completed":
				const signUp = await Channel.findOneAndUpdate(
					// @ts-ignore
					{ _id: new mongoose.Types.ObjectId(event.data.object.metadata._id) },
					{
						$set: {
							"meta.premiumType": "premium",
							// @ts-ignore
							"meta.stripeId": event.data.object.subscription
						}
					}
				)

				if (signUp) {
					await fetch.post({
						url: localURL || `https://${apiURL}.kittr.gg/stripe-webhook-reporter`,
						body: {
							// @ts-ignore
							_id: event.data.object.metadata._id
						}
					})

					return res.status(200).json({ success: true })
				}

				break
			case "customer.subscription.deleted":
				const customerCancelled = await Channel.findOneAndUpdate(
					// @ts-ignore
					{ "meta.stripeId": event.data.object.id },
					{
						$set: {
							"meta.premiumType": "",
							"meta.stripeId": ""
						}
					}
				)

				if (customerCancelled) {
					await fetch.post({
						url: localURL || `https://${apiURL}.kittr.gg/stripe-webhook-reporter`,
						body: {
							// @ts-ignore
							_id: event.data.object.id
						}
					})

					return res.status(200).json({ cancelled: true })
				}
				break
			case "subscription_schedule.updated":
				// @ts-ignore
				if (event.data.object.status === "past_due") {
					// @ts-ignore
					const cancelSubscription = await stripe.subscriptions.del(event.data.object.id)

					const paymentLapse = await Channel.findOneAndUpdate(
						// @ts-ignore
						{ "meta.stripeId": event.data.object.id },
						{
							$set: {
								"meta.premiumType": "",
								"meta.stripeId": ""
							}
						}
					)

					if (paymentLapse && cancelSubscription) {
						await fetch.post({
							url: localURL || `https://${apiURL}.kittr.gg/stripe-webhook-reporter`,
							body: {
								// @ts-ignore
								_id: event.data.object.metadata._id
							}
						})

						return res.status(200).json({ cancelled: true })
					}
				}
				break
			default:
				console.log(`Unhandled event type ${event.type}`)
				return res.status(418).send("im a little teapot")
		}
	} catch (err: any) {
		console.log(err)
		return res.status(400).send(`Webhook Error: ${err.message}`)
	}
})

export default handler
