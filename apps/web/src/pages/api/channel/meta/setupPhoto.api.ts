import { NextServerPayload } from "@kittr/types"
import type { NextApiRequest, NextApiResponse } from "next"
import { createHandler } from "@Middlewares/createHandler"
import { userAuth } from "@Middlewares/auth"
import { prisma, Channel } from "@kittr/prisma"

const handler = createHandler(userAuth)

// Set flag for a channel's setup photo
handler.post(async (req: NextApiRequest, res: NextApiResponse<NextServerPayload<Channel>>) => {
	try {
		const { slot, boolean, channelId, channelProfileId } = JSON.parse(req.body) as {
			slot: number
			boolean: boolean
			channelId: string
			channelProfileId: string
		}

		const result = await prisma.channel.update({
			where: { id: channelId },
			data: {
				profile: {
					update: {
						setupPhotos: {
							upsert: {
								where: {
									channelProfileId_slot: {
										channelProfileId: channelProfileId,
										slot
									}
								},
								create: {
									slot,
									exists: boolean
								},
								update: {
									slot,
									exists: boolean
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
		return res.status(500).json({ error: true, errorMessage: JSON.stringify(error) })
	}
})

export default handler
