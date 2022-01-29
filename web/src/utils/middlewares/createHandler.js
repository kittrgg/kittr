import nextConnect from "next-connect"
import dbMiddleWare from "./dbConnect"

export const createHandler = (...middleware) => {
	return nextConnect().use(dbMiddleWare, ...middleware)
}
