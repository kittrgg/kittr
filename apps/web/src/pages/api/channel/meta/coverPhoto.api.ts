import type { NextApiRequest, NextApiResponse } from "next"
import { NextServerPayload } from "@kittr/types"
import { createHandler } from "@Middlewares/createHandler"
import { userAuth } from "@Middlewares/auth"
import { prisma, Channel } from "@kittr/prisma"

const handler = createHandler(userAuth)

// Set boolean for channel's cover photo
handler.post(async (req: NextApiRequest, res: NextApiResponse<NextServerPayload<Channel>>) => {
	try {
		const { hasCoverPhoto, channelId } = req.body

		const result = await prisma.channel.update({
			where: { id: channelId },
			data: {
				profile: {
					update: {
						hasCoverPhoto
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
