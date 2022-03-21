import type { NextApiRequest, NextApiResponse } from "next"
import { createHandler } from "@Utils/middlewares/createHandler"
import { Game } from "@Services/orm/models"
import { sanitize } from "@Services/orm/utils/sanitize"

const handler = createHandler()

// Fetch games on kittr
handler.get(async (req: NextApiRequest, res: NextApiResponse) => {
	const { urlSafeName } = req.query

	try {
		const data = await Game.find(urlSafeName ? { urlSafeName: sanitize(urlSafeName) } : {})
		return res.status(200).json(data)
	} catch (error) {
		return res.status(400).json(error)
	}
})

export default handler
