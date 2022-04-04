import type { NextApiRequest, NextApiResponse } from "next"
import { NextServerPayload } from "@kittr/types"
import { createHandler } from "@Utils/middlewares/createHandler"
import { adminAuth } from "@Utils/middlewares/auth"
import { prisma, KitOption } from "@kittr/prisma"
const handler = createHandler(adminAuth)

// Create a new kit option
handler.post(async (req: NextApiRequest, res: NextApiResponse<NextServerPayload<KitOption>>) => {
	const newKitOption = req.body as KitOption

	try {
		const data = await prisma.kitOption.create({
			data: newKitOption
		})
		return res.status(200).json(data)
	} catch (error) {
		return res.status(400).json({ error: true, errorMessage: JSON.stringify(error) })
	}
})

// Edit an existing kit option
handler.put(async (req: NextApiRequest, res: NextApiResponse<NextServerPayload<KitOption>>) => {
	const { id, ...rest } = req.body as KitOption

	try {
		const data = await prisma.kitOption.update({
			where: { id },
			data: rest
		})

		return res.status(200).json(data)
	} catch (error) {
		return res.status(400).json({ error: true, errorMessage: JSON.stringify(error) })
	}
})

// Delete a kit option
handler.delete(async (req: NextApiRequest, res: NextApiResponse<NextServerPayload<KitOption>>) => {
	const { id } = req.body as KitOption

	try {
		const data = await prisma.kitOption.delete({ where: { id } })
		return res.status(200).json(data)
	} catch (error) {
		return res.status(400).json({ error: true, errorMessage: JSON.stringify(error) })
	}
})

export default handler
