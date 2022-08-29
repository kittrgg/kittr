import { createRouter } from "@Server/createRouter"
import { StripeController } from '@Server/controllers/stripe'

export const stripeRouter = createRouter()
  .merge("buy-premium", StripeController.buyPremium)
  .merge("manage-premium", StripeController.managePremium)