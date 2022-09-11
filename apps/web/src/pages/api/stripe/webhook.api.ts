import fetch from "@Fetch"
import { prisma } from "@kittr/prisma"
import { createHandler } from "@Middlewares/createHandler"
import { buffer } from "micro"
import type { NextApiRequest, NextApiResponse } from "next"
import Stripe from "stripe"
import { withSentry } from "@sentry/nextjs"

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

	const subscriptionHandler = async (event: Stripe.Event) => {
		// @ts-ignore
		const result = await prisma.channel.update({
			where: {
				// @ts-ignore
				id: event.data.object.metadata.channelId
			},
			data: {
				plan: {
					update: {
						type: "PREMIUM"
					}
				}
			}
		})

		return res.status(200).json({ result })
	}

	try {
		event = stripe.webhooks.constructEvent(buf, sig, process.env.STRIPE_WEBHOOK_SECRET as string)

		// Handle the event
		switch (event.type) {
			case "customer.subscription.created": {
				return subscriptionHandler(event)
			}
			case "customer.subscription.updated": {
				return subscriptionHandler(event)
			}
			case "customer.subscription.deleted": {
				const customerCancelled = await prisma.channel.update({
					where: {
						// @ts-ignore
						id: event.object.metadata.channelId || event.data.object.metadata._id // _id needed for pre-Prisma migration accounts
					},
					data: {
						plan: {
							update: {
								type: "BASIC"
							}
						}
					}
				})

				if (customerCancelled) {
					await fetch.post({
						url: localURL || `https://${apiURL}.kittr.gg/stripe-webhook-reporter`,
						body: {
							// @ts-ignore
							id: event.object.metadata.id || event.data.object.metadata._id // _id needed for pre-Prisma migration accounts
						}
					})

					return res.status(200).json({ cancelled: true })
				}
			}
				break
			case "subscription_schedule.updated":
				// @ts-ignore
				if (event.data.object.status === "past_due") {
					// @ts-ignore
					const cancelSubscription = await stripe.subscriptions.del(event.data.object.id)

					const paymentLapse = await prisma.channel.update({
						where: {
							// @ts-ignore
							id: event.object.metadata.id || event.data.object.metadata._id // _id needed for pre-Prisma migration accounts
						},
						data: {
							plan: {
								update: {
									type: "BASIC"
								}
							}
						}
					})

					if (paymentLapse && cancelSubscription) {
						await fetch.post({
							url: localURL || `https://${apiURL}.kittr.gg/stripe-webhook-reporter`,
							body: {
								// @ts-ignore
								id: event.object.metadata.id || event.data.object.metadata._id // _id needed for pre-Prisma migration accounts
							}
						})

						return res.status(200).json({ cancelled: true })
					}
				}
				break
			default:
				console.log(`Unhandled event type ${event.type}`)
				return res.status(200).send("Unhandled event")
		}
	} catch (err: any) {
		console.log(err)
		return res.status(400).send(`Webhook Error: ${err.message}`)
	}
})

export default withSentry(handler)
