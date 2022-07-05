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
		const manager = await prisma.channelManager.findFirst({
			where: {
				channelId,
				firebaseId: uid
			},
			include: {
				channel: {
					select: { id: true }
				}
			}
		})

		if (!manager) {
			return res.status(404).json({ error: true, errorMessage: "Channel not found." })
		}

		const result = await prisma.channel.update({
			where: {
				id: channelId
			},
			data: {
				managers: {
					delete: {
						id: manager?.id
					}
				}
			}
		})

		return res.status(200).json(result)
	} catch (error) {
		console.log(error)
		return res.status(500).json({
			error: true,
			errorMessage: "We did something wrong. Error Code 9942"
		})
	}
})

export default handler
