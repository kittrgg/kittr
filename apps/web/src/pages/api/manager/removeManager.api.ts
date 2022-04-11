import type { NextApiRequest, NextApiResponse } from "next"
import { NextServerPayload } from "@kittr/types"
import { createHandler } from "@Utils/middlewares/createHandler"
import { userAuth } from "@Utils/middlewares/auth"
import { prisma, Channel } from "@kittr/prisma"

const handler = createHandler(userAuth)

// Remove a manager from a channel
handler.delete(async (req: NextApiRequest, res: NextApiResponse<NextServerPayload<Channel>>) => {
	const { uid, channelId } = JSON.parse(req.body) as { uid: string; channelId: string }

	try {
		const channel = await prisma.channel.findFirst({
			where: {
				id: channelId
			},
			include: {
				managers: true
			}
		})

		if (!channel) {
			return res.status(404).json({ error: true, errorMessage: "Channel not found." })
		}

		const result = await prisma.channel.update({
			where: {
				id: channelId
			},
			data: {
				managers: {
					delete: {
						id: uid
					}
				}
			}
		})

		return res.status(200).json(result)
	} catch (error) {
		return res.status(500).json({
			error: true,
			errorMessage: "We did something wrong. Error Code 9942"
		})
	}
})

export default handler
