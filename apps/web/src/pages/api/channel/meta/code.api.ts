import type { NextApiRequest, NextApiResponse } from "next"
import { NextServerPayload } from "@kittr/types"
import { createHandler } from "@Middlewares/createHandler"
import { userAuth } from "@Middlewares/auth"
import { prisma, Channel } from "@kittr/prisma"

const handler = createHandler(userAuth)

// Edit channel's creator code for the specific game
handler.put(async (req: NextApiRequest, res: NextApiResponse<NextServerPayload<Channel>>) => {
	const { code, gameId, channelId } = JSON.parse(req.body)

	try {
		const result = await prisma.channel.update({
			where: { id: channelId },
			data: {
				gameCreatorCodes: {
					upsert: {
						where: {
							id: gameId
						},
						create: {
							code,
							gameId
						},
						update: {
							code,
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

export default handler
