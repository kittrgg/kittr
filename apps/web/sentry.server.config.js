// This file configures the initialization of Sentry on the server.
// The config you add here will be used whenever the server handles a request.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs"

const { NEXT_PUBLIC_SENTRY_DSN, NEXT_PUBLIC_IS_DEV, NEXT_PUBLIC_IS_TESTING } = process.env

if (NEXT_PUBLIC_SENTRY_DSN)
	Sentry.init({
		dsn: NEXT_PUBLIC_SENTRY_DSN,
		environment: NEXT_PUBLIC_IS_DEV ? "development" : NEXT_PUBLIC_IS_TESTING ? "testing" : "production",
		// Adjust this value in production, or use tracesSampler for greater control
		tracesSampleRate: 1.0
		// ...
		// Note: if you want to override the automatic release value, do not set a
		// `release` value here - use the environment variable `SENTRY_RELEASE`, so
		// that it will also get attached to your source maps
	})
