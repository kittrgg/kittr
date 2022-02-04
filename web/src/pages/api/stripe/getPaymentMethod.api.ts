import type { NextApiRequest, NextApiResponse } from "next"
import { createHandler } from "@Middlewares/createHandler"

import Stripe from "stripe"

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, { apiVersion: "2020-08-27" })

const handler = createHandler()

// Get a payment method from a subscription
handler.get(async (req: NextApiRequest, res: NextApiResponse<NextServerPayload<{ last4: string | undefined }>>) => {
	const { subId } = req.query

	try {
		const { default_payment_method } = await stripe.subscriptions.retrieve(subId as string)
		const { card } = await stripe.paymentMethods.retrieve(default_payment_method as string)

		return res.status(200).json({ last4: card?.last4 })
	} catch (err: any) {
		res.status(400).json({ error: true, errorMessage: `Webhook Error: ${err.message}` })
	}
})

export default handler
