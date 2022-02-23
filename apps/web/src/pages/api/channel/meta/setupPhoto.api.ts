import mongoose from "mongoose"
import type { NextApiRequest, NextApiResponse } from "next"
import { createHandler } from "@Middlewares/createHandler"
import Channel, { ChannelModel } from "@Services/mongodb/models/Channel"
import { userAuth } from "@Middlewares/auth"
import { sanitize } from "@Services/mongodb/utils/sanitize"

const handler = createHandler(userAuth)

// Set flag for a channel's setup photo
handler.post(async (req: NextApiRequest, res: NextApiResponse<NextServerPayload<ChannelModel | null>>) => {
	try {
		const { slot, boolean, channelId } = JSON.parse(req.body)

		const data = await Channel.findByIdAndUpdate(
			{
				_id: new mongoose.Types.ObjectId(sanitize(channelId))
			},
			{
				$set: { [`meta.setupPhotos.${slot}`]: sanitize(boolean) }
			},
			{ new: true }
		)

		return res.status(200).json(data)
	} catch (error) {
		console.log(error)
		return res.status(500).json({ error: true, errorMessage: JSON.stringify(error) })
	}
})

export default handler
