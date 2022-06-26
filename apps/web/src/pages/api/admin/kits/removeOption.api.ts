import { prisma, WarzoneKitOption } from "@kittr/prisma"
import { NextServerPayload } from "@kittr/types"
import { adminAuth } from "@Utils/middlewares/auth"
import { createHandler } from "@Utils/middlewares/createHandler"
import type { NextApiRequest, NextApiResponse } from "next"

const handler = createHandler(adminAuth)

// Delete a kit option
handler.delete(async (req: NextApiRequest, res: NextApiResponse<NextServerPayload<WarzoneKitOption>>) => {
	const { id } = req.body

	try {
		const data = await prisma.warzoneKitOption.delete({ where: { id } })
		return res.status(200).json(data)
	} catch (err) {
		return res.status(400).json({ error: true, errorMessage: JSON.stringify(err) })
	}
})

export default handler
