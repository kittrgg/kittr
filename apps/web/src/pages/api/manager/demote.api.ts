import type { NextApiRequest, NextApiResponse } from "next"
import { NextServerPayload } from "@kittr/types"
import { IManager } from "@kittr/types/manager"
import { createHandler } from "@Utils/middlewares/createHandler"
import { userAuth } from "@Utils/middlewares/auth"
import mongoose from "mongoose"
import Channel, { ChannelModel } from "@Services/mongodb/models/Channel"
import { sanitize } from "@Services/mongodb/utils/sanitize"

const handler = createHandler(userAuth)

// Demote a manager in a channel
handler.put(async (req: NextApiRequest, res: NextApiResponse<NextServerPayload<ChannelModel>>) => {
	const { uid, channelId, token } = JSON.parse(req.body)

	try {
		const result = await Channel.find({ _id: new mongoose.Types.ObjectId(channelId) }).lean()
		const userRole = result[0].managers.find((manager: IManager) => manager.uid === token.uid)?.role

		if (userRole === "Owner") {
			const result = await Channel.findOneAndUpdate(
				{
					"_id": new mongoose.Types.ObjectId(channelId),
					"managers.uid": { $eq: sanitize(uid) }
				},
				{ $set: { "managers.$": { uid: sanitize(uid), role: "Editor" } } },
				{ new: true }
			)

			if (result) {
				return res.status(200).json(result)
			}
		} else {
			return res
				.status(403)
				.json({ error: true, errorMessage: "You do not have permission to demote another manager." })
		}
	} catch (error) {
		return res.status(500).json({ error: true, errorMessage: "We messed up. Error Code (1957)" })
	}
})

export default handler
