import * as Logger from "@kittr/logger/node"
import nextConnect from "next-connect"

export const createHandler = (...middleware: any[]) => {
	return nextConnect({
		onError: (err, req, res, next) => {
			Logger.logError(err)
			res.statusCode = 500
			return res.end("Internal Server Error")
		}
	})
}
