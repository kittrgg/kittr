// This file configures the initialization of Sentry on the server.
// The config you add here will be used whenever the server handles a request.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@kittr/logger/nextjs"

if (process.env.NEXT_PUBLIC_SENTRY_DSN)
	Sentry.init({
		dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
		environment: process.env.NEXT_PUBLIC_IS_DEV
			? "development"
			: process.env.NEXT_PUBLIC_IS_TESTING
			? "testing"
			: process.env.NODE_ENV,
		allowUrls: ["https://*.kittr.gg", "https://kittr.gg", "http://localhost:3000"],
		ignoreErrors: [
			// "Failed to fetch",
			"Failed to load Stripe.js",
			"UnknownError: Connection to Indexed Database server lost. Refresh the page to try again",
			"UnknownError: Error looking up record in object store by key range",
			"null is not an object (evaluating 't.getBoundingClientRect')"
		],
		// Adjust this value in production, or use tracesSampler for greater control
		tracesSampleRate: 1.0
		// ...
		// Note: if you want to override the automatic release value, do not set a
		// `release` value here - use the environment variable `SENTRY_RELEASE`, so
		// that it will also get attached to your source maps
	})
