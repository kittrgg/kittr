// API Routes are currently unreachable due to our existing nginx setup
// If you'd like to use these, an effort must be made
// API Routes are already wired to be used with Sentry for reporting

import { createApiHandler } from "../../utils/createApiHandler"

const handler = async (req: any, res: any) => {
	console.log("Testing an action here.")
	throw new Error("API throw error test.")
	res.status(200).json({ name: "John Doe" })
}

export default handler
