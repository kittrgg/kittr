import Stripe from "stripe"

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
	apiVersion: "2020-08-27"
})
