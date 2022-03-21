import type { NextApiRequest, NextApiResponse } from "next"
import { createHandler } from "@Utils/middlewares/createHandler"
import { KitOption } from "@Services/orm/models"

const handler = createHandler()

// Fetch all options
handler.get(async (req: NextApiRequest, res: NextApiResponse) => {
	try {
		const data = await KitOption.find()
		return res.status(200).json(data)
	} catch (error) {
		return res.status(500).json(error)
	}
})

export default handler
