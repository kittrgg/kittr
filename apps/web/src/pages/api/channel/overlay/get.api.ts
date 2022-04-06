import type { NextApiRequest, NextApiResponse } from "next"
import { createHandler } from "@Utils/middlewares/createHandler"
import { prisma } from "@kittr/prisma"

const handler = createHandler()

// Get overlay data for a user
handler.get(async (req: NextApiRequest, res: NextApiResponse) => {
	const { id } = req.query as { id: string }

	const result = await prisma.channel.findFirst({
		where: { id },
		include: {
			overlay: {
				include: {
					channel: {
						include: {
							profile: {
								include: {
									brandColors: true
								}
							}
						}
					},
					primaryKit: true,
					secondaryKit: true
				}
			}
		}
	})

	return res.status(200).json(result)
})

export default handler
