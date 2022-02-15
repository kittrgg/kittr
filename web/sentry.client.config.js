// This file configures the initialization of Sentry on the browser.
// The config you add here will be used whenever a page is visited.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs"

const SENTRY_DSN = process.env.SENTRY_DSN || process.env.NEXT_PUBLIC_SENTRY_DSN

const environment = process.env.NEXT_PUBLIC_ENABLE_SEEDING === "true" ? "testing" : process.env.NODE_ENV

Sentry.init({
	allowUrls: ["https://kittr.gg", "https://*.kittr.gg", "http://localhost:3000"],
	ignoreErrors: [
		"Failed to load Stripe.js",
		"UnknownError: Connection to Indexed Database server lost. Refresh the page to try again",
		"UnknownError: Error looking up record in object store by key range",
		"Non-Error promise rejection captured with value: undefined"
	],
	dsn: SENTRY_DSN,
	environment,
	// Adjust this value in production, or use tracesSampler for greater control
	tracesSampleRate: 0.25
	// ...
	// Note: if you want to override the automatic release value, do not set a
	// `release` value here - use the environment variable `SENTRY_RELEASE`, so
	// that it will also get attached to your source maps
})
