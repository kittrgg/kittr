import { NextServerPayload } from "@kittr/types/types"
import type { NextApiRequest, NextApiResponse } from "next"
import { createHandler } from "@Utils/middlewares/createHandler"
import { userAuth } from "@Utils/middlewares/auth"
import { prisma, Channel } from "@kittr/prisma"

const handler = createHandler(userAuth)

// Change the owner of the channel
handler.put(async (req: NextApiRequest, res: NextApiResponse<NextServerPayload<Channel>>) => {
	const { channelId, previousOwner, newOwner, token } = req.body as {
		channelId: string
		previousOwner: string
		newOwner: string
		token: any
	}

	try {
		const result = await prisma.channel.findFirst({
			where: {
				id: channelId
			},
			include: {
				managers: true
			}
		})

		if (!result) {
			return res.status(404).json({ error: true, errorMessage: "Channel not found." })
		}

		const userRole = result.managers.find((manager) => manager.firebaseId === token.uid)?.role

		if (userRole !== "OWNER") {
			return res.status(403).json({ error: true, errorMessage: "You do not have permission to add a new manager." })
		}

		const updatedChannel = await prisma.channel.update({
			where: {
				id: channelId
			},
			data: {
				managers: {
					update: [
						{
							where: {
								id: previousOwner
							},
							data: {
								role: "ADMIN"
							}
						},
						{
							where: {
								id: newOwner
							},
							data: {
								role: "OWNER"
							}
						}
					]
				}
			}
		})

		return res.status(200).json(updatedChannel)
	} catch (error) {
		return res.status(500).json({
			error: true,
			errorMessage: "We did something wrong. Error Code 2347"
		})
	}
})

export default handler
