import type { NextApiRequest, NextApiResponse } from "next"
import { createHandler } from "@Middlewares/createHandler"
import { prisma } from "@kittr/prisma"

const handler = createHandler()

handler.get(async (req: NextApiRequest, res: NextApiResponse) => {
	const { searchTerm } = req.query as { searchTerm: string }

	try {
		const result = await prisma.channel.findMany({
			where: {
				displayName: {
					search: searchTerm
				}
			},
			include: {
				profile: true,
				links: true
			}
		})

		return res.status(200).json(result)
	} catch (errors) {
		return res.status(400).json({ error: true, errors })
	}
})

export default handler
