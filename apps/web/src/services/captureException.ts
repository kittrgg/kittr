import { captureException as sentryException } from "@sentry/nextjs"

export const captureException = (error: Error) => {
	sentryException(error, { tags: { isKittr: true } })
}
