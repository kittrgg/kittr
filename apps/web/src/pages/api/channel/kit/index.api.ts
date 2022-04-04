import { NextServerPayload } from "@kittr/types"
import { IKitOption } from "@kittr/types/kits"
import type { NextApiRequest, NextApiResponse } from "next"
import mongoose, { UpdateWriteOpResult } from "mongoose"
import { createHandler } from "@Utils/middlewares/createHandler"
import { Channel as oldChannel } from "@Services/orm/models"
import { userAuth } from "@Middlewares/auth"
import { sanitize } from "@Services/orm/utils/sanitize"
import { ChannelModel } from "@Services/orm/models/Channel"

import { prisma, Kit, Channel } from "@kittr/prisma"

const handler = createHandler(userAuth)

// Upsert a kit to a channel
handler.post(async (req: NextApiRequest, res: NextApiResponse<NextServerPayload<Channel>>) => {
	const { channelId, kit } = JSON.parse(req.body) as { kit: Kit; channelId: string }

	try {
		const data = await prisma.channel.update({
			where: { id: channelId },
			data: {
				kits: {
					upsert: {
						where: { id: kit.id },
						create: kit,
						update: kit
					}
				}
			}
		})

		return res.status(200).json(data)
	} catch (err) {
		return res.status(500).json({ error: true, errorMessage: JSON.stringify(err) })
	}
})

handler.post(
	async (req: NextApiRequest, res: NextApiResponse<NextServerPayload<UpdateWriteOpResult | ChannelModel | null>>) => {
		const {
			kitId,
			channelId,
			kitBase,
			previousUpdater,
			customTitle = "",
			options = [],
			blueprint = "",
			featured = false,
			youtubeURL = "",
			tiktokId = "",
			quote = ""
		} = JSON.parse(req.body)

		const optionsArray = Object.values<IKitOption>(options)
			.filter((opt) => opt._id.length > 0)
			.map((opt) => new mongoose.Types.ObjectId(opt._id))

		if (!kitId) {
			try {
				const data = await oldChannel.updateOne(
					{ _id: sanitize(channelId) },
					{
						$push: {
							kits: {
								_id: new mongoose.Types.ObjectId(),
								baseId: sanitize(kitBase),
								options: sanitize(optionsArray),
								userData: {
									customTitle: sanitize(customTitle),
									blueprint: sanitize(blueprint),
									featured: sanitize(featured),
									youtubeURL: sanitize(youtubeURL),
									tiktokId: sanitize(tiktokId),
									quote: sanitize(quote)
								}
							}
						},
						previousUpdater
					}
				)

				return res.status(200).json(data)
			} catch (error) {
				return res.status(400).json({ error: true, errorMessage: JSON.stringify(error) })
			}
		}

		if (kitId) {
			try {
				const data = await oldChannel.findOneAndUpdate(
					{
						_id: sanitize(channelId),
						kits: {
							$elemMatch: {
								_id: new mongoose.Types.ObjectId(sanitize(kitId))
							}
						}
					},
					{
						$set: {
							"kits.$[kit]": {
								_id: new mongoose.Types.ObjectId(sanitize(kitId)),
								baseId: sanitize(kitBase),
								options: sanitize(optionsArray),
								userData: {
									customTitle: sanitize(customTitle),
									blueprint: sanitize(blueprint),
									featured: sanitize(featured),
									youtubeURL: sanitize(youtubeURL),
									tiktokId: sanitize(tiktokId),
									quote: sanitize(quote)
								}
							}
						},
						previousUpdater
					},
					{
						arrayFilters: [{ "kit._id": new mongoose.Types.ObjectId(sanitize(kitId)) }],
						new: true
					}
				)

				return res.status(200).json(data)
			} catch (error) {
				return res.status(400).json({ error: true, errorMessage: JSON.stringify(error) })
			}
		}
	}
)

// Delete a channel's kit
handler.delete(async (req: NextApiRequest, res: NextApiResponse<NextServerPayload<ChannelModel | null>>) => {
	const { channelId, kitId } = JSON.parse(req.body)

	try {
		const data = await oldChannel.findOneAndUpdate(
			{ _id: channelId },
			{ $pull: { kits: { _id: new mongoose.Types.ObjectId(sanitize(kitId)) } } },
			{ new: true }
		)

		return res.status(200).json(data)
	} catch (error) {
		return res.status(400).json({ error: true, errorMessage: JSON.stringify(error) })
	}
})

export default handler
