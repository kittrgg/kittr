import type { NextApiRequest, NextApiResponse } from "next"
import { NextServerPayload } from "@kittr/types"
import { createHandler } from "@Utils/middlewares/createHandler"
import { userAuth } from "@Utils/middlewares/auth"
import { getOverlayQuery, getOverlayQueryReturnType } from "@Services/orm/queries/channels/getOverlay"
import { prisma, Channel } from "@kittr/prisma"

const handler = createHandler(userAuth)

// Get overlay data for a user
handler.get(async (req: NextApiRequest, res: NextApiResponse<NextServerPayload<getOverlayQueryReturnType>>) => {
	try {
		const { id } = req.query as { id: string }

		const result = await getOverlayQuery({ id })

		return res.status(200).json(result)
	} catch (error) {
		return res.status(500).json({ error: true, errorMessage: JSON.stringify(error) })
	}
})

// Overwrite the some key on the channel's overlay
// TODO: Yikes, talk about hacky.
handler.post(async (req: NextApiRequest, res: NextApiResponse<NextServerPayload<Channel>>) => {
	const { channelId, key, change } = JSON.parse(req.body)

	try {
		// Some kind of nested set thing...
		const result = await prisma.channel.update({
			where: { id: channelId },
			data: {
				overlay: {
					update: {
						[key]: change
					}
				}
			}
		})

		return res.status(200).json(result)
	} catch (error) {
		return res.status(500).json({ error: true, errorMessage: JSON.stringify(error) })
	}
})

export default handler
