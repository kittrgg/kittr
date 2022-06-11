import { createHandler } from "@Middlewares/createHandler"
import { NextApiRequest, NextApiResponse } from "next"

const handler = createHandler()

// Fetch options by kit
handler.get(async (req: NextApiRequest, res: NextApiResponse) => {
	try {
		return res.status(200).json({ hello: "world" })
	} catch (error) {
		return res.status(500).json({ error })
	}
})

export default handler
