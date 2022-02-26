import * as Sentry from "@sentry/node"
import { Severity } from "@sentry/types"

/** Send exception to the error logger. */
export const logError = (message: string, withConsole?: boolean) => {
	Sentry.captureException(new Error(message))
	if (withConsole) {
		console.error(message)
	}
}

export const logWarning = (warning: string, withConsole?: boolean) => {
	Sentry.captureMessage(warning, "warning" as Severity)
	if (withConsole) {
		console.warn(warning)
	}
}

export const logInfo = (info: string, withConsole?: boolean) => {
	Sentry.captureMessage(info, "info" as Severity)
	if (withConsole) {
		console.info(info)
	}
}

export const logDebug = (debugMessage: string, withConsole?: boolean) => {
	Sentry.captureMessage(debugMessage, "debug" as Severity)
	if (withConsole) {
		console.warn(debugMessage)
	}
}

export const consoleLog = (message: string) => {
	console.log(message)
}
