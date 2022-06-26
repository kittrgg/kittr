import type { NextApiRequest, NextApiResponse } from "next"
import { createHandler } from "@Utils/middlewares/createHandler"
import { prisma } from "@kittr/prisma"

const handler = createHandler()

// Fetch kits depending on a game's _id
handler.get(async (req: NextApiRequest, res: NextApiResponse) => {
	const { gameId } = req.query as { gameId: string }

	try {
		const result = await prisma.warzoneKitBase.findMany({
			where: {
				gameId
			}
		})
		return res.status(200).json(result)
	} catch (error) {
		return res.status(500).json(error)
	}
})

export default handler
