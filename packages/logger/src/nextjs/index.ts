import * as Sentry from "@sentry/nextjs"
// Send log to Sentry (or other) as an error
// Send log to Sentry (or other) as a warning
// Send log to Sentry (or other) as info
// Option for console.log/error? Or perhaps make it so that we get console logs in dev but not elsewhere?

export const log = (
	message: string,
	level: Sentry.Severity = Sentry.Severity.Info
) => {
	console.log(message)
}
