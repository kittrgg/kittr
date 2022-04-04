import { NextApiRequest, NextApiResponse } from "next"
import { NextServerPayload } from "@kittr/types"
import { createHandler } from "@Middlewares/createHandler"
import { userAuth } from "@Middlewares/auth"
import { prisma, Channel } from "@kittr/prisma"

const handler = createHandler(userAuth)

// Add a game to a channel
handler.post(async (req: NextApiRequest, res: NextApiResponse<NextServerPayload<Channel>>) => {
	const { gameId, channelId } = JSON.parse(req.body)

	try {
		const result = await prisma.channel.update({
			where: { id: channelId },
			data: {
				games: {
					connect: { id: gameId }
				}
			}
		})

		return res.status(200).json(result)
	} catch (error) {
		return res.status(400).json({ error: true, errorMessage: JSON.stringify(error) })
	}
})

export default handler
