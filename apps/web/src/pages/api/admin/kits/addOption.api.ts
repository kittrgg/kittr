import type { NextApiRequest, NextApiResponse } from "next"
import { createHandler } from "@Utils/middlewares/createHandler"
import { adminAuth } from "@Utils/middlewares/auth"

import { prisma } from "@kittr/prisma"

const handler = createHandler(adminAuth)

// Add a kit option to the kit base as a possibility for the user to add to their kit
handler.post(async (req: NextApiRequest, res: NextApiResponse) => {
	const { kitBaseId, gameId, orderPlacement, slotKey, displayName } = JSON.parse(req.body)
	const data = await prisma.kitOption.create({
		data: {
			kitBaseId,
			gameId,
			orderPlacement,
			slotKey,
			displayName
		}
	})

	return res.status(200).json({ data })
})

export default handler
