import type { NextApiRequest, NextApiResponse } from "next"
import { createHandler } from "@Utils/middlewares/createHandler"
import Channel from "@Models/Channel"
import Stripe from "stripe"
import { userAuth } from "@Middlewares/auth"

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, { apiVersion: "2020-08-27" })

const handler = createHandler(userAuth)

// Create a Stripe subscription manager
handler.post(
	async (req: NextApiRequest, res: NextApiResponse<NextServerPayload<Stripe.BillingPortal.Session | null>>) => {
		const { _id } = req.body
		const origin = req.headers.origin

		try {
			const channel = await Channel.findOne({ _id })

			if (!channel) return res.status(500).json({ error: true, errorMessage: "Channel not found" })

			const subscription = await stripe.subscriptions.retrieve(channel.meta.stripeId)
			const session = await stripe.billingPortal.sessions.create({
				customer: subscription.customer as string,
				return_url: `${origin}/back-to-dashboard`
			})

			return res.status(200).json(session)
		} catch (error) {
			console.error("threw in session creation", error)
			return res.status(500).json({ error: true, errorMessage: JSON.stringify(error) })
		}
	}
)

export default handler
