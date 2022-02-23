import * as Sentry from "@sentry/node"
import nextConnect from "next-connect"
import dbMiddleWare from "./dbConnect"

export const createHandler = (...middleware: any[]) => {
	return nextConnect({
		onError: (err, req, res, next) => {
			Sentry.captureException(err)
			res.statusCode = 500
			return res.end("Internal Server Error")
		}
	}).use(dbMiddleWare, ...middleware)
}
