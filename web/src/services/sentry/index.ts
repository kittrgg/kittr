import * as Sentry from "@sentry/nextjs"
import { Severity } from "@sentry/types"

const severities = {
	fatal: Severity.Fatal,
	error: Severity.Error,
	warning: Severity.Warning,
	log: Severity.Log,
	info: Severity.Info,
	debug: Severity.Debug,
	critical: Severity.Critical
}

interface Params {
	message: string
	severity?: "fatal" | "error" | "warning" | "log" | "info" | "debug" | "critical"
	// captureContext?: CaptureContext | Severity
}

/** This method can be configured to accept severities of your choosing. If one is not provided, it will use the level "log". */
const log = ({ message, severity = "log" }: Params) => Sentry.captureMessage(message, severities[severity])

/** This method ALWAYS results in an error in Sentry logging. You will receive a stack trace and a severity level of "error". */
const exception = (error: Error) => {
	if (typeof error === "object") {
		Sentry.captureException(new Error(JSON.stringify(error)))
	} else {
		Sentry.captureException(new Error(error))
	}
}

export const logger = {
	log,
	exception
}
