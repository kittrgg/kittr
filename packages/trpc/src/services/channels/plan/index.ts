import { prisma } from "@kittr/prisma";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2020-08-27",
});

export const getPlan = async (id?: string) => {
  const plan = await prisma.channelPlan.findFirst({
    where: {
      channelId: id,
    },
  });

  return plan;
};

export const getSubscriptionEnd = async (stripeSubscriptionId: string) => {
  const subscription = await stripe.subscriptions.retrieve(
    stripeSubscriptionId,
  );

  return subscription.current_period_end;
};

export const getCardLast4Digits = async (stripeSubscriptionId: string) => {
  const { default_payment_method } = await stripe.subscriptions.retrieve(
    stripeSubscriptionId,
  );
  const { card } = await stripe.paymentMethods.retrieve(
    default_payment_method as string,
  );

  return card?.last4;
};
