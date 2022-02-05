import type { NextApiRequest, NextApiResponse } from "next"
import { createHandler } from "@Utils/middlewares/createHandler"
import { userAuth } from "@Utils/middlewares/auth"
import mongoose from "mongoose"
import Channel, { ChannelModel } from "@Services/mongodb/models/Channel"
import { sanitize } from "@Services/mongodb/utils/sanitize"

const handler = createHandler(userAuth)

// Promote a manager in a channel
handler.put(async (req: NextApiRequest, res: NextApiResponse<NextServerPayload<ChannelModel>>) => {
	const { uid, channelId, token } = JSON.parse(req.body)

	try {
		const result = await Channel.find({ _id: new mongoose.Types.ObjectId(channelId) }).lean()
		const userRole = result[0].managers.find((manager: IManager) => manager.uid === token.uid)?.role

		if (userRole === "Administrator" || userRole === "Owner") {
			const result = await Channel.findOneAndUpdate(
				{
					"_id": new mongoose.Types.ObjectId(sanitize(channelId)),
					"managers.uid": { $eq: sanitize(uid) }
				},
				{ $set: { "managers.$": { uid: sanitize(uid), role: "Administrator" } } },
				{ new: true }
			)

			if (result) {
				return res.status(200).json(result)
			}
		} else {
			return res.status(403).json({ error: true, errorMessage: "You do not have permission to add a new manager." })
		}
	} catch (error) {
		return res.status(500).json({
			error: true,
			errorMessage: "We did something wrong. Error Code 7455"
		})
	}
})

export default handler
