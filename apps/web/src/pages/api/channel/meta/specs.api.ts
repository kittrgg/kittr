import { NextServerPayload } from "@kittr/types"
import type { NextApiRequest, NextApiResponse } from "next"
import { createHandler } from "@Middlewares/createHandler"
import { userAuth } from "@Middlewares/auth"
import { prisma, Channel } from "@kittr/prisma"

const handler = createHandler(userAuth)

// Set channel's PC spec
handler.post(async (req: NextApiRequest, res: NextApiResponse<NextServerPayload<Channel>>) => {
	try {
		const { partType, partName, channelProfileId, channelId } = JSON.parse(req.body) as {
			partType: string
			partName: string
			channelProfileId: string
			channelId: string
		}

		const result = await prisma.channel.update({
			where: { id: channelId },
			data: {
				profile: {
					update: {
						channelPcSpecs: {
							upsert: {
								where: {
									channelProfileId_partType: {
										channelProfileId: channelProfileId,
										partType
									}
								},
								create: {
									partType,
									partName
								},
								update: {
									partType,
									partName
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

// Delete a channel's PC spec
handler.delete(async (req: NextApiRequest, res: NextApiResponse) => {
	try {
		const { channelId, specId } = JSON.parse(req.body)

		const result = await prisma.channel.update({
			where: { id: channelId },
			data: {
				profile: {
					update: {
						channelPcSpecs: {
							delete: {
								id: specId
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
