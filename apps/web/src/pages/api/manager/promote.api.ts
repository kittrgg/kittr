import { NextServerPayload } from "@kittr/types/types"
import type { NextApiRequest, NextApiResponse } from "next"
import { createHandler } from "@Utils/middlewares/createHandler"
import { userAuth } from "@Utils/middlewares/auth"
import { prisma, Channel } from "@kittr/prisma"

const handler = createHandler(userAuth)

// Promote a manager in a channel
handler.put(async (req: NextApiRequest, res: NextApiResponse<NextServerPayload<Channel>>) => {
	const { uid, channelId, token } = JSON.parse(req.body)

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

		const userRole = channel.managers.find((manager) => manager.firebaseId === token.uid)?.role

		if (userRole === "Editor") {
			return res.status(403).json({ error: true, errorMessage: "You do not have permission to add a new manager." })
		}

		const updated = await prisma.channel.update({
			where: {
				id: channelId
			},
			data: {
				managers: {
					update: {
						where: {
							id: uid
						},
						data: {
							role: "Administrator"
						}
					}
				}
			}
		})

		return res.status(200).json(updated)
	} catch (error) {
		return res.status(500).json({
			error: true,
			errorMessage: "We did something wrong. Error Code 7455"
		})
	}
})

export default handler
