import type { NextApiRequest, NextApiResponse } from "next"
import { NextServerPayload } from "@kittr/types"
import { createHandler } from "@Middlewares/createHandler"
import { userAuth } from "@Utils/middlewares/auth"
import { prisma, Channel } from "@kittr/prisma"

const handler = createHandler(userAuth)

// Edit youtube autoplay setting
handler.put(async (req: NextApiRequest, res: NextApiResponse<NextServerPayload<Channel>>) => {
	const { id, boolean } = JSON.parse(req.body)

	try {
		const result = await prisma.channel.update({
			where: { id },
			data: {
				profile: {
					update: {
						youtubeAutoplay: boolean
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
