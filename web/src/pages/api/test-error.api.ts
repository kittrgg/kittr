import type { NextApiRequest, NextApiResponse } from "next"
import { createHandler } from "@Utils/middlewares/createHandler"

const handler = createHandler()

// Fetch games on kittr
handler.get(async (req: NextApiRequest, res: NextApiResponse) => {
	throw new Error("API throw error test")
	res.status(200).json({ name: "John Doe" })
})

export default handler
