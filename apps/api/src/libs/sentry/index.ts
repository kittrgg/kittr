const { SENTRY_DSN, IS_DEV, IS_TESTING } = process.env

import * as Sentry from "@sentry/node"
// Needed for supporting tracing (even if it's not referenced)!
// eslint-disable-next-line
import * as Tracing from "@sentry/tracing"

export const initSentry = () => {
	if (!SENTRY_DSN) {
		return console.log("Sentry is currently disabled.")
	}

	Sentry.init({
		dsn: SENTRY_DSN,
		environment: IS_DEV ? "development" : IS_TESTING ? "testing" : "production",
		tracesSampleRate: 1.0
	})
}

export default Sentry
