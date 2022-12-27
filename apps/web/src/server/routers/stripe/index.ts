import { StripeController } from "@Server/controllers/stripe"
import { createRouter } from "@Server/createRouter"

export const stripeRouter = createRouter()
	.merge("buy-premium", StripeController.buyPremium)
	.merge("manage-premium", StripeController.managePremium)
