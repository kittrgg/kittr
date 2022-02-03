import mongoose from "mongoose"
import type { NextApiRequest, NextApiResponse } from "next"
import { createHandler } from "@Middlewares/createHandler"
import Channel from "@Services/mongodb/models/Channel"
import { userAuth } from "@Middlewares/auth"
import { toURL } from "@Utils/helpers/toURL"
import { sanitize } from "@Services/mongodb/utils/sanitize"
import { ChannelModel } from "@Models/Channel"

const handler = createHandler(userAuth)

// Edit channel's displayName
handler.put(async (req: NextApiRequest, res: NextApiResponse<NextServerPayload<ChannelModel | null>>) => {
	const { _id, value } = req.body
	try {
		const existingChannels = await Channel.find({ urlSafeName: toURL(value) })

		if (existingChannels.length > 0) {
			return res.status(403).json({
				error: true,
				errorMessage:
					"That gamertag is too similar to another channel. We don't want to confuse our system...Please choose another."
			})
		}

		const data = await Channel.findByIdAndUpdate(
			{ _id: new mongoose.Types.ObjectId(sanitize(_id)) },
			{ $set: { displayName: sanitize(value), urlSafeName: sanitize(toURL(value.trim())) } },
			{ new: true }
		)

		return res.status(200).json(data)
	} catch (error) {
		return res.status(400).json({ error: true, errorMessage: JSON.stringify(error) })
	}
})

export default handler
