import type { NextApiRequest, NextApiResponse } from "next"
import { NextServerPayload } from "@kittr/types"
import { createHandler } from "@Middlewares/createHandler"

import Stripe from "stripe"
import { userAuth } from "@Middlewares/auth"

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, { apiVersion: "2020-08-27" })

export const config = {
	api: {
		bodyParser: false
	}
}

const handler = createHandler(userAuth)

handler.get(async (req: NextApiRequest, res: NextApiResponse<NextServerPayload<{ periodEnd: number }>>) => {
	const { stripeId } = req.query

	try {
		const subscription = await stripe.subscriptions.retrieve(stripeId as string)
		return res.status(200).json({ periodEnd: subscription.current_period_end })
	} catch (error) {
		res.status(500).json({ error: true, errorMessage: JSON.stringify(error) })
	}
})

export default handler
