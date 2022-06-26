import { Channel, prisma } from "@kittr/prisma"
import { NextServerPayload } from "@kittr/types"
import { userAuth } from "@Middlewares/auth"
import { createHandler } from "@Middlewares/createHandler"
import { NextApiRequest, NextApiResponse } from "next"

const handler = createHandler(userAuth)

// Delete a game AND the game's associated kits from a channel
handler.delete(async (req: NextApiRequest, res: NextApiResponse<NextServerPayload<Channel>>) => {
	const { gameId, channelId } = JSON.parse(req.body) as { gameId: string; channelId: string }

	try {
		const update = await prisma.channel.update({
			where: { id: channelId },
			data: {
				games: {
					disconnect: { id: gameId }
				},
				warzoneKits: {
					deleteMany: {
						gameId
					}
				}
			}
		})

		return res.status(200).json(update)
	} catch (err) {
		return res.status(500).json({ error: true, errorMessage: JSON.stringify(err) })
	}
})

export default handler
