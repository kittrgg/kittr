import type { NextApiRequest, NextApiResponse } from "next"
import { NextServerPayload } from "@kittr/types"
import { createHandler } from "@Utils/middlewares/createHandler"
import { adminAuth } from "@Utils/middlewares/auth"

import { prisma, Game } from "@kittr/prisma"

const handler = createHandler(adminAuth)

// TODO: Make this do the thing right. This was my naive version because I knew I didn't need this functionality yet.
handler.post(async (req: NextApiRequest, res: NextApiResponse<NextServerPayload<Game>>) => {
	const savedGame = await prisma.game.create({
		data: req.body as any
	})

	try {
		return res.status(200).json(savedGame)
	} catch (error) {
		return res.status(400).json({ error: true, errorMessage: JSON.stringify(error) })
	}
})

// TODO: Make this do the thing right. This was my naive version because I knew I didn't need this functionality yet.
handler.put(async (req: NextApiRequest, res: NextApiResponse<NextServerPayload<Game>>) => {
	const { id, displayName, backgroundImageUrl, titleImageUrl } = req.body

	try {
		const editedGame = await prisma.game.update({
			where: { id },
			data: {
				displayName,
				backgroundImageUrl,
				titleImageUrl
			}
		})

		return res.status(200).json(editedGame)
	} catch (error) {
		return res.status(400).json({ error: true, errorMessage: JSON.stringify(error) })
	}
})

export default handler
