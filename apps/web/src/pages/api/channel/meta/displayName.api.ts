import mongoose from "mongoose"
import type { NextApiRequest, NextApiResponse } from "next"
import { NextServerPayload } from "@kittr/types"
import { createHandler } from "@Middlewares/createHandler"
import Channel from "@Services/orm/models/Channel"
import { userAuth } from "@Middlewares/auth"
import { toURL } from "@Utils/helpers/toURL"
import { sanitize } from "@Services/orm/utils/sanitize"
import { ChannelModel } from "@Services/orm/models/Channel"

const handler = createHandler(userAuth)

// Edit channel's displayName
handler.put(async (req: NextApiRequest, res: NextApiResponse<NextServerPayload<ChannelModel | null>>) => {
	const { _id, value } = JSON.parse(req.body)
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
