import * as Sentry from "@sentry/node"
import { NextApiRequest, NextApiResponse } from "next"
import nextConnect from "next-connect"
import dbMiddleWare from "./dbConnect"

export const createHandler = (...middleware: any[]) => {
	return nextConnect({
		onError: (err, req: NextApiRequest, res: NextApiResponse, next) => {
			Sentry.captureException(err)
			return res.status(500).send("Internal Server Error")
		}
	}).use(dbMiddleWare, ...middleware)
}
