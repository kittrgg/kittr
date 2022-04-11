import type { NextApiRequest, NextApiResponse } from "next"
import { NextServerPayload } from "@kittr/types"
import { createHandler } from "@Utils/middlewares/createHandler"
import { userAuth } from "@Utils/middlewares/auth"
import { prisma, Channel } from "@kittr/prisma"

const handler = createHandler(userAuth)

// Demote a manager in a channel
handler.put(async (req: NextApiRequest, res: NextApiResponse<NextServerPayload<Channel>>) => {
	const { uid, channelId, token } = JSON.parse(req.body)

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

		if (userRole === "Owner") {
			const result = await prisma.channel.update({
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
								role: "Editor"
							}
						}
					}
				}
			})

			if (result) {
				return res.status(200).json(result)
			}
		} else {
			return res
				.status(403)
				.json({ error: true, errorMessage: "You do not have permission to demote another manager." })
		}
	} catch (error) {
		return res.status(500).json({ error: true, errorMessage: "We messed up. Error Code (1957)" })
	}
})

export default handler
