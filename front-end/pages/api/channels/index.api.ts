import mongoose from "mongoose"
import type { NextApiRequest, NextApiResponse } from "next"
import { createHandler } from "@Middlewares/createHandler"
import Channel from "@Services/mongodb/models/Channel"
import { toURL } from "@Utils/helpers/toURL"
import { badWordFilter } from "@Utils/helpers/badWordFilter"
import { sanitize } from "@Services/mongodb/utils/sanitize"

const handler = createHandler()

// Add a channel
handler.post(async (req: NextApiRequest, res: NextApiResponse) => {
	const { displayName, userId } = JSON.parse(req.body)

	try {
		if (displayName.length > 26)
			return res.status(400).json({ error: true, message: "That name is too long. 25 characters or less" })

		if (badWordFilter(displayName)) {
			return res.status(400).json({ error: true, message: "Hey, no bad words!" })
		}

		const existingChannels = await Channel.find({ urlSafeName: toURL(displayName.trim()) })
		if (existingChannels.length > 0) {
			return res.status(403).json({
				error: true,
				message:
					"That name is too similar to another channel. We don't want to confuse our system...Please choose another."
			})
		} else {
			const _id = new mongoose.Types.ObjectId()

			const newUser = await new Channel({
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

			const saveResult = await newUser.save({ new: true })
			return res.status(200).json({ success: true, saveResult })
		}
	} catch (error) {
		return res.status(500).send({
			error: true,
			message: "We messed up. Error Code 4923"
		})
	}
})

export default handler
