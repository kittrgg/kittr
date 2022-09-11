import { createController } from "@Server/createController"
import { authenticateUser } from "@Server/middlewares/authenticateUser"
import { z } from "zod"
import { stripe } from "@Services/stripe"
import { TRPCError } from "@trpc/server"
import { getUrl } from "@Utils/helpers/getUrl"

export const buyPremium = createController()
  .middleware(authenticateUser)
  .mutation("", {
    input: z.object({
      channelId: z.string(),
      displayName: z.string(),
      urlSafeName: z.string()
    }),
    async resolve({ input }) {
      try {
        const session = await stripe.checkout.sessions.create({
          mode: "subscription",
          payment_method_types: ["card"],
          line_items: [
            {
              price: process.env.SUBSCRIPTION_PRICE_ID,
              quantity: 1
            },
            {
              price: process.env.MONTHLY_TIP_PRICE_ID,
              quantity: 1,
              adjustable_quantity: {
                enabled: true,
                minimum: 0
              }
            }
          ],
          allow_promotion_codes: true,
          subscription_data: { metadata: { channelId: input.channelId, displayName: input.displayName, urlSafeName: input.urlSafeName } },
          metadata: { channelId: input.channelId, displayName: input.displayName, urlSafeName: input.urlSafeName },
          success_url: `${getUrl}/premium-success?session_id={CHECKOUT_SESSION_ID}`,
          cancel_url: `${getUrl}/back-to-dashboard`
        })

        return session
      } catch (error) {
        console.log(error)
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "Error #: 97334"
        })
      }
    }
  })

export const managePremium = createController()
  .middleware(authenticateUser)
  .mutation("", {
    input: z.object({
      channelId: z.string()
    }),
    async resolve({ input }) {
      try {
        const channel = await prisma.channel.findFirst({
          where: {
            id: input.channelId
          },
          include: {
            plan: true
          }
        })

        if (!channel) {
          throw new TRPCError({
            code: "INTERNAL_SERVER_ERROR",
            message: "Error #: 991726"
          })
        }

        if (!channel.plan || !channel.plan.stripeSubscriptionId) {
          throw new TRPCError({
            code: "INTERNAL_SERVER_ERROR",
            message: "Error #: 991727"
          })
        }

        const subscription = await stripe.subscriptions.retrieve(channel.plan?.stripeSubscriptionId)
        const session = await stripe.billingPortal.sessions.create({
          customer: subscription.customer as string,
          return_url: `${getUrl}/back-to-dashboard`
        })

        return session
      } catch (error) {
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "Error #: 991722"
        })
      }
    }
  })

export const getPaymentMethod = createController()
  .middleware(authenticateUser)
  .query("", {
    input: z.object({
      subId: z.string()
    }),
    async resolve({ input }) {
      try {
        const { default_payment_method } = await stripe.subscriptions.retrieve(input.subId)
        const { card } = await stripe.paymentMethods.retrieve(default_payment_method as string)

        return { last4: card?.last4 }
      } catch (err: any) {
        throw new TRPCError({
          code: "BAD_REQUEST",
          message: "Error #: 18910"
        })
      }
    }
  })


export const StripeController = {
  buyPremium,
  managePremium,
  getPaymentMethod
}
