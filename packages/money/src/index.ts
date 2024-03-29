import Stripe from 'stripe';

// Halp

if (!process.env.STRIPE_SECRET_KEY) {
	throw new Error('No STRIPE_SECRET_KEY');
}

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
	apiVersion: '2020-08-27',
});
