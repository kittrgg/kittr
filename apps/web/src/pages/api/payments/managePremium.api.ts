import { prisma } from "@kittr/prisma"
import { NextServerPayload } from "@kittr/types/types"
import { createHandler } from "@Utils/middlewares/createHandler"
import type { NextApiRequest, NextApiResponse } from "next"
import Stripe from "stripe"

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, { apiVersion: "2020-08-27" })

const handler = createHandler()

// Create a Stripe subscription manager
handler.post(
	async (req: NextApiRequest, res: NextApiResponse<NextServerPayload<Stripe.BillingPortal.Session | null>>) => {
		const { id } = req.body
		const origin = req.headers.origin

		try {
			const channel = await prisma.channel.findFirst({
				where: {
					id
				},
				include: {
					plan: true
				}
			})

			if (!channel) return res.status(500).json({ error: true, errorMessage: "Channel not found" })
			if (!channel.plan || !channel.plan.stripeSubscriptionId)
				return res.status(500).json({ error: true, errorMessage: "Channel has no plan" })

			const subscription = await stripe.subscriptions.retrieve(channel.plan?.stripeSubscriptionId)
			const session = await stripe.billingPortal.sessions.create({
				customer: subscription.customer as string,
				return_url: `${origin}/back-to-dashboard`
			})

			return res.status(200).json(session)
		} catch (error) {
			return res.status(500).json({ error: true, errorMessage: JSON.stringify(error) })
		}
	}
)

export default handler
