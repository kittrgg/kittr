import type { NextApiRequest, NextApiResponse } from "next"
import { createHandler } from "@Utils/middlewares/createHandler"
import { prisma } from "@kittr/prisma"

const handler = createHandler()

// Fetch all bases
handler.get(async (req: NextApiRequest, res: NextApiResponse) => {
	try {
		const result = await prisma.kitBase.findMany({})
		return res.status(200).json(result)
	} catch (error) {
		return res.status(500).json(error)
	}
})

export default handler
