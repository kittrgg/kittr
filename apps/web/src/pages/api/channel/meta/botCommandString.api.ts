import type { NextApiRequest, NextApiResponse } from "next"
import { NextServerPayload } from "@kittr/types"
import { createHandler } from "@Middlewares/createHandler"
import { userAuth } from "@Middlewares/auth"
import { prisma, ChannelCustomGameCommand } from "@kittr/prisma"

const handler = createHandler(userAuth)

// Edit command string for channel's game
handler.put(async (req: NextApiRequest, res: NextApiResponse<NextServerPayload<ChannelCustomGameCommand>>) => {
	try {
		const { channelId, commandId, gameId, commandString } = JSON.parse(req.body)

		const update = {
			command: commandString,
			channel: {
				connect: {
					id: channelId
				}
			},
			game: {
				connect: {
					id: gameId
				}
			}
		}

		const result = await prisma.channelCustomGameCommand.upsert({
			where: { id: commandId ?? "" },
			create: update,
			update
		})

		return res.status(200).json(result)
	} catch (error) {
		console.log(error)
		return res.status(400).json({ error: true, errorMessage: JSON.stringify(error) })
	}
})

export default handler
