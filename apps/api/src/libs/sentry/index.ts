const { SENTRY_DSN, ENVIRONMENT } = process.env

import * as Sentry from "@sentry/node"
// Needed for supporting tracing (even if it's not referenced)!
import * as Tracing from "@sentry/tracing"

export const initSentry = () => {
	if (!SENTRY_DSN) {
		return console.log("Sentry is currently disabled.")
	}

	Sentry.init({
		dsn: SENTRY_DSN,
		environment: ENVIRONMENT,
		tracesSampleRate: 1.0
	})
}

export default Sentry
