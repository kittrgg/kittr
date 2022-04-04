import type { NextApiRequest, NextApiResponse } from "next"
import { NextServerPayload } from "@kittr/types"
import { createHandler } from "@Utils/middlewares/createHandler"
import { adminAuth } from "@Utils/middlewares/auth"
import { prisma, KitOption } from "@kittr/prisma"

const handler = createHandler(adminAuth)

// Delete a kit option
handler.delete(async (req: NextApiRequest, res: NextApiResponse<NextServerPayload<KitOption>>) => {
	const { id } = req.body

	try {
		const data = await prisma.kitOption.delete({ where: { id } })
		return res.status(200).json(data)
	} catch (err) {
		return res.status(400).json({ error: true, errorMessage: JSON.stringify(err) })
	}
})

export default handler
