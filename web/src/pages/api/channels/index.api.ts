import mongoose from "mongoose"
import type { NextApiRequest, NextApiResponse } from "next"
import { createHandler } from "@Middlewares/createHandler"
import Channel, { ChannelModel } from "@Services/mongodb/models/Channel"
import { toURL } from "@Utils/helpers/toURL"
import { badWordFilter } from "@Utils/helpers/badWordFilter"
import { sanitize } from "@Services/mongodb/utils/sanitize"

const handler = createHandler()

// Add a channel
handler.post(async (req: NextApiRequest, res: NextApiResponse<NextServerPayload<ChannelModel>>) => {
	const { displayName, userId } = JSON.parse(req.body)

	try {
		if (displayName.length > 26)
			return res.status(400).json({ error: true, errorMessage: "That name is too long. 25 characters or less" })

		if (badWordFilter(displayName)) {
			return res.status(400).json({ error: true, errorMessage: "Hey, no bad words!" })
		}

		const existingChannels = await Channel.find({ urlSafeName: toURL(displayName.trim()) })
		if (existingChannels.length > 0) {
			return res.status(403).json({
				error: true,
				errorMessage:
					"That name is too similar to another channel. We don't want to confuse our system...Please choose another."
			})
		} else {
			const _id = new mongoose.Types.ObjectId()

			const newUser = new Channel({
				_id,
				isPremium: false,
				createdDate: Date.now(),
				displayName: sanitize(displayName.trim()),
				urlSafeName: toURL(sanitize(displayName.trim())),
				meta: {
					profileImage: ""
				},
				managers: [
					{
						uid: userId,
						role: "Owner"
					}
				]
			})

			const data = await newUser.save()
			return res.status(200).json(data)
		}
	} catch (error) {
		return res.status(500).send({
			error: true,
			errorMessage: "We messed up. Error Code 4923"
		})
	}
})

export default handler
