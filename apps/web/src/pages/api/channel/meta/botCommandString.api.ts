import type { NextApiRequest, NextApiResponse } from "next"
import { NextServerPayload } from "@kittr/types"
import { createHandler } from "@Middlewares/createHandler"
import { userAuth } from "@Middlewares/auth"
import { prisma, Channel } from "@kittr/prisma"

const handler = createHandler(userAuth)

// Edit command string for channel's game
handler.put(async (req: NextApiRequest, res: NextApiResponse<NextServerPayload<Channel>>) => {
	const { channelId, commandId, gameId, command } = JSON.parse(req.body)

	try {
		const result = await prisma.channel.update({
			where: { id: channelId },
			data: {
				customGameCommands: {
					upsert: {
						where: {
							id: commandId
						},
						// These don't need a channelId given to them because it already knows.
						// How? Well, we're updating a channel. Duh.
						create: {
							gameId,
							command
						},
						update: {
							command,
							gameId
						}
					}
				}
			}
		})

		return res.status(200).json(result)
	} catch (error) {
		return res.status(400).json({ error: true, errorMessage: JSON.stringify(error) })
	}
})
