import type { NextApiRequest, NextApiResponse } from "next"
import { createHandler } from "@Middlewares/createHandler"
import { userAuth } from "@Middlewares/auth"
import { prisma } from "@kittr/prisma"

const handler = createHandler(userAuth)

// Edit channel's brand color
handler.put(async (req: NextApiRequest, res: NextApiResponse) => {
	const { primaryColor, colorId, channelId } = JSON.parse(req.body) as {
		primaryColor: string
		colorId: string
		channelId: string
	}

	console.log(primaryColor, colorId)

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
									type: "PRIMARY",
									value: primaryColor
								},
								update: {
									type: "PRIMARY",
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
		console.log(error)
		return res.status(500).json({ isError: true, error })
	}
})

export default handler
