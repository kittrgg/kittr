import nextConnect from "next-connect"
import dbMiddleWare from "./dbConnect"

export const createHandler = (...middleware: any[]) => {
	return nextConnect().use(dbMiddleWare, ...middleware)
}
