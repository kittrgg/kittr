import * as Sentry from "@sentry/nextjs"
import { consoleLog, logError, logWarning, logInfo, logDebug } from "./index"

jest.mock("@sentry/nextjs", () => ({
	captureException: jest.fn(),
	captureMessage: jest.fn()
}))

describe("Next logger", () => {
	it("logError", () => {
		jest.spyOn(console, "error")
		logError("error")
		expect(console.error).toBeCalledTimes(0)
		expect(Sentry.captureException).toHaveBeenCalledTimes(1)
	})

	it("logError with console.error", () => {
		jest.spyOn(console, "error")
		logError("error", true)
		expect(console.error).toBeCalledTimes(1)
		expect(Sentry.captureException).toHaveBeenCalledTimes(1)
	})

	it("logWarning", () => {
		jest.spyOn(console, "warn")
		logWarning("warning")
		expect(console.warn).toBeCalledTimes(0)
		expect(Sentry.captureMessage).toHaveBeenCalledTimes(1)
	})

	it("logWarning with console.warn", () => {
		jest.spyOn(console, "warn")
		logWarning("warning", true)
		expect(console.warn).toBeCalledTimes(1)
		expect(Sentry.captureMessage).toHaveBeenCalledTimes(1)
	})

	it("logInfo", () => {
		jest.spyOn(console, "info")
		logInfo("info")
		expect(Sentry.captureMessage).toHaveBeenCalledTimes(1)
	})

	it("logInfo with console.info", () => {
		jest.spyOn(console, "info")
		logInfo("info", true)
		expect(console.info).toBeCalledTimes(1)
		expect(Sentry.captureMessage).toHaveBeenCalledTimes(1)
	})

	it("logDebug", () => {
		jest.spyOn(console, "warn")
		logDebug("debug")
		expect(console.info).toBeCalledTimes(0)
		expect(Sentry.captureMessage).toHaveBeenCalledTimes(1)
	})

	it("logDebug with console.info", () => {
		jest.spyOn(console, "warn")
		logDebug("debug", true)
		expect(console.info).toBeCalledTimes(1)
		expect(Sentry.captureMessage).toHaveBeenCalledTimes(1)
	})

	it("consoleLog", () => {
		jest.spyOn(console, "log")
		consoleLog("hello")
		expect(console.log).toBeCalledTimes(1)
	})
})
