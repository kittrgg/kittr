import type { NextApiRequest, NextApiResponse } from "next"
import { createHandler } from "@Middlewares/createHandler"
import { userAuth } from "@Middlewares/auth"
import { prisma } from "@kittr/prisma"

const handler = createHandler(userAuth)

// Edit channel's brand color
handler.put(async (req: NextApiRequest, res: NextApiResponse) => {
	const { primaryColor, colorId, channelId } = req.body as { primaryColor: string; colorId: string; channelId: string }

	try {
		const result = await prisma.channel.update({
			where: { id: channelId },
			data: {
				profile: {
					update: {
						brandColors: {
							upsert: {
								where: {
									id: colorId
								},
								create: {
									type: "primary",
									value: primaryColor
								},
								update: {
									type: "primary",
									value: primaryColor
								}
							}
						}
					}
				}
			}
		})

		return res.status(200).json(result)
	} catch (error) {
		return res.status(500).json({ isError: true, error })
	}
})

export default handler
