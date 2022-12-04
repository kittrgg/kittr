import * as Sentry from "@sentry/node"

/** Send exception to the error logger from node. */
export const logError = (message: string | Error, withConsole?: boolean) => {
	Sentry.captureException(message)
	if (withConsole) {
		console.error(message)
	}
}

/** Send warning to the error logger from node. */
export const logWarning = (warning: string, withConsole?: boolean) => {
	Sentry.captureMessage(warning, "warning")
	if (withConsole) {
		console.warn(warning)
	}
}

/** Send an info log to the error logger from node. */
export const logInfo = (info: string, withConsole?: boolean) => {
	Sentry.captureMessage(info, "info")
	if (withConsole) {
		console.info(info)
	}
}

/** Send a debug log to the error logger from node. */
export const logDebug = (debugMessage: string, withConsole?: boolean) => {
	Sentry.captureMessage(debugMessage, "debug")
	if (withConsole) {
		console.warn(debugMessage)
	}
}

/** Log a message to the console. This method will not send an error report. */
export const consoleLog = (message: string) => {
	console.log(message)
}
