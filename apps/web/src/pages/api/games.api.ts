import type { NextApiRequest, NextApiResponse } from "next"
import { createHandler } from "@Utils/middlewares/createHandler"
import { getAllGamesQuery, getAllGamesQueryReturnType } from "@Services/orm/queries/games/getAll"
import { NextServerPayload } from "@kittr/types"

const handler = createHandler()

// Fetch games on kittr
handler.get(async (req: NextApiRequest, res: NextApiResponse<NextServerPayload<getAllGamesQueryReturnType>>) => {
	try {
		const data = await getAllGamesQuery()

		return res.status(200).json(data)
	} catch (error) {
		return res.status(400).json({ error: true, errorMessage: JSON.stringify(error) })
	}
})

export default handler
