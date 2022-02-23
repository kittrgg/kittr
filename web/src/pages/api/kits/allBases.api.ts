import type { NextApiRequest, NextApiResponse } from "next"
import { createHandler } from "@Utils/middlewares/createHandler"
import { KitBase } from "@Services/mongodb/models"

const handler = createHandler()

// Fetch all bases
handler.get(async (req: NextApiRequest, res: NextApiResponse) => {
	try {
		const data = await KitBase.find()
		return res.status(200).json(data)
	} catch (error) {
		return res.status(500).json(error)
	}
})

export default handler
