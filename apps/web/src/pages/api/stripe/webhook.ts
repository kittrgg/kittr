import fetch from '@Fetch';
import { createHandler } from '@Middlewares/createHandler';
import { prisma } from '@kittr/prisma';
import { withSentry } from '@sentry/nextjs';
import { buffer } from 'micro';
import type { NextApiRequest, NextApiResponse } from 'next';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
	apiVersion: '2020-08-27',
});

export const config = {
	api: {
		bodyParser: false,
	},
};

const handler = createHandler();

// Stripe webhook
handler.post(async (req: NextApiRequest, res: NextApiResponse) => {
	const sig = req.headers['stripe-signature'] as string;
	const buf = await buffer(req);

	let event: Stripe.Event;

	const localURL =
		process.env.VERCEL_ENV === 'development'
			? 'http://api:3001/stripe-webhook-reporter'
			: '';
	const apiURL = process.env.VERCEL_ENV === 'preview' ? 'stage-api' : 'api';

	const subscriptionHandler = async (event: Stripe.Event) => {
		const metadata = (event.data.object as Stripe.Subscription).metadata;

		const result = await prisma.channel.update({
			where: {
				id: metadata.channelId,
			},
			data: {
				plan: {
					update: {
						stripeSubscriptionId: (event.data.object as Stripe.Subscription).id,
						type: 'PREMIUM',
					},
				},
			},
		});

		return res.status(200).json({ result });
	};

	try {
		event = stripe.webhooks.constructEvent(
			buf,
			sig,
			process.env.STRIPE_WEBHOOK_SECRET!,
		);

		// Handle the event
		switch (event.type) {
			case 'customer.subscription.created': {
				return subscriptionHandler(event);
			}
			case 'customer.subscription.updated': {
				return subscriptionHandler(event);
			}
			case 'customer.subscription.deleted': {
				const metadata = (event.data.object as Stripe.Subscription).metadata;

				const cancelled = await prisma.channel.update({
					where: {
						id: metadata.channelId,
					},
					data: {
						plan: {
							update: {
								stripeSubscriptionId: null,
								type: 'BASIC',
							},
						},
					},
				});

				return res.status(200).json({ cancelled });
			}
			break;
			case 'subscription_schedule.updated':
				const subscriptionObject = event.data.object as Stripe.Subscription;
				if (subscriptionObject.status === 'past_due') {
					const cancelSubscription = await stripe.subscriptions.del(
						subscriptionObject.id,
					);

					const paymentLapse = await prisma.channel.update({
						where: {
							id:
								subscriptionObject.metadata.id ||
								subscriptionObject.metadata._id, // _id needed for pre-Prisma migration accounts
						},
						data: {
							plan: {
								update: {
									stripeSubscriptionId: null,
									type: 'BASIC',
								},
							},
						},
					});

					if (paymentLapse && cancelSubscription) {
						await fetch.post({
							url:
								localURL ||
								`https://${apiURL}.kittr.gg/stripe-webhook-reporter`,
							body: {
								id:
									subscriptionObject.metadata.id ||
									subscriptionObject.metadata._id, // _id needed for pre-Prisma migration accounts
							},
						});

						return res.status(200).json({ cancelled: true });
					}
				}
				break;
			default:
				console.log(`Unhandled event type ${event.type}`);
				return res.status(200).send('Unhandled event');
		}
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
	} catch (err: any) {
		console.log(err);
		return res.status(400).send(`Webhook Error: ${err.message}`);
	}
});

export default withSentry(handler);
