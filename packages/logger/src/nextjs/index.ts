import * as Sentry from "@sentry/nextjs"
import { Severity } from "@sentry/types"

/** Send exception to the error logger from node. */
export const logError = (message: string, withConsole?: boolean) => {
	Sentry.captureException(new Error(message))
	if (withConsole) {
		console.error(message)
	}
}

/** Send warning to the error logger from node. */
export const logWarning = (warning: string, withConsole?: boolean) => {
	Sentry.captureMessage(warning, "warning" as Severity)
	if (withConsole) {
		console.warn(warning)
	}
}

/** Send an info log to the error logger from node. */
export const logInfo = (info: string, withConsole?: boolean) => {
	Sentry.captureMessage(info, "info" as Severity)
	if (withConsole) {
		console.info(info)
	}
}

/** Send a debug log to the error logger from node. */
export const logDebug = (debugMessage: string, withConsole?: boolean) => {
	Sentry.captureMessage(debugMessage, "debug" as Severity)
	if (withConsole) {
		console.info(debugMessage)
	}
}

/** Log a message to the console. This method will not send an error report. */
export const consoleLog = (message: string) => {
	console.log(message)
}
