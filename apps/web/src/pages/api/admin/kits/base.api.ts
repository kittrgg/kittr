import type { NextApiRequest, NextApiResponse } from "next"
import { NextServerPayload } from "@kittr/types"
import { createHandler } from "@Utils/middlewares/createHandler"
import { adminAuth } from "@Utils/middlewares/auth"

import { prisma, KitBase } from "@kittr/prisma"

const handler = createHandler(adminAuth)

// Create a new kit base
handler.post(async (req: NextApiRequest, res: NextApiResponse<NextServerPayload<KitBase>>) => {
	const newKitBase = req.body as KitBase

	try {
		const data = await prisma.kitBase.create({
			data: newKitBase
		})

		return res.status(200).json(data)
	} catch (error) {
		return res.status(400).json({ error: true, errorMessage: JSON.stringify(error) })
	}
})

// Edit an existing kit base
handler.put(async (req: NextApiRequest, res: NextApiResponse<NextServerPayload<KitBase>>) => {
	const { id, ...rest } = req.body as KitBase

	try {
		const data = await prisma.kitBase.update({
			where: { id },
			data: rest
		})

		return res.status(200).json(data)
	} catch (error) {
		return res.status(400).json({ error: true, errorMessage: JSON.stringify(error) })
	}
})

// Delete a kit base
handler.delete(async (req: NextApiRequest, res: NextApiResponse) => {
	const { id } = req.body

	try {
		const data = await prisma.kitBase.delete({ where: { id } })

		return res.status(200).json(data)
	} catch (err) {
		return res.status(400).json({ error: true, errorMessage: JSON.stringify(err) })
	}
})

export default handler
