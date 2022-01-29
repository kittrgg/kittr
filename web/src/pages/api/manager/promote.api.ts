import type { NextApiRequest, NextApiResponse } from "next"
import { createHandler } from "@Utils/middlewares/createHandler"
import { userAuth } from "@Utils/middlewares/auth"
import mongoose from "mongoose"
import { Channel } from "@Services/mongodb/models"
import { sanitize } from "@Services/mongodb/utils/sanitize"

const handler = createHandler(userAuth)

// Promote a manager in a channel
handler.put(async (req: NextApiRequest, res: NextApiResponse) => {
	const { uid, channelId, token } = req.body

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
				return res.status(200).json({})
			}
		} else {
			return res.status(403).json({ error: true, message: "You do not have permission to add a new manager." })
		}
	} catch (error) {
		return res.status(500).json({
			error: true,
			message: "We did something wrong. Error Code 7455"
		})
	}
})

export default handler
