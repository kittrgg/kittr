import type { NextApiRequest, NextApiResponse } from "next"
import { createHandler } from "@Utils/middlewares/createHandler"
import { KitBase } from "@Services/orm/models"
import { sanitize } from "@Services/orm/utils/sanitize"

const handler = createHandler()

// Fetch kits depending on a game's _id
handler.get(async (req: NextApiRequest, res: NextApiResponse) => {
	const { gameId } = req.query

	try {
		const data = await KitBase.find({ gameId: sanitize(gameId) })
		return res.status(200).json(data)
	} catch (error) {
		return res.status(500).json(error)
	}
})

export default handler
