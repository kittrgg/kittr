import type { NextApiRequest, NextApiResponse } from "next"
import { createHandler } from "@Utils/middlewares/createHandler"
import { userAuth } from "@Utils/middlewares/auth"
import mongoose from "mongoose"
import Channel, { ChannelModel } from "@Services/mongodb/models/Channel"
import { sanitize } from "@Services/mongodb/utils/sanitize"
import { getRawChannelProfileByIdQuery } from "@Services/mongodb"

const handler = createHandler(userAuth)

// Get overlay data for a user
handler.get(async (req: NextApiRequest, res: NextApiResponse<NextServerPayload<ChannelModel>>) => {
	try {
		const { _id } = req.query

		const profile = await getRawChannelProfileByIdQuery(_id as string)

		return res.status(200).json(profile)
	} catch (error) {
		return res.status(500).json({ error: true, errorMessage: JSON.stringify(error) })
	}
})

// Remove a channel from existence...Or just the database
handler.post(async (req: NextApiRequest, res: NextApiResponse<NextServerPayload<ChannelModel>>) => {
	const { channelId, key, change } = JSON.parse(req.body)

	try {
		const result = await Channel.findOneAndUpdate(
			{ _id: new mongoose.Types.ObjectId(sanitize(channelId)) },
			{
				$set: {
					[`overlay.${key}`]: change
				}
			}
		)

		if (result) {
			return res.status(200).json(result)
		}
	} catch (error) {
		return res.status(500).json({ error: true, errorMessage: JSON.stringify(error) })
	}
})

export default handler
