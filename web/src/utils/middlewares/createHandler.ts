import Sentry from "@sentry/node"
import nextConnect from "next-connect"
import dbMiddleWare from "./dbConnect"

export const createHandler = (...middleware: any[]) => {
	return nextConnect({
		onError: Sentry.Handlers.errorHandler()
	}).use(Sentry.Handlers.requestHandler(), dbMiddleWare, ...middleware)
}
