import type { NextApiRequest, NextApiResponse } from "next"
import { createHandler } from "@Utils/middlewares/createHandler"
import { userAuth } from "@Utils/middlewares/auth"
import mongoose from "mongoose"
import { Channel } from "@Services/mongodb/models"
import { sanitize } from "@Services/mongodb/utils/sanitize"

const handler = createHandler(userAuth)

// Remove a manager from a channel
handler.delete(async (req: NextApiRequest, res: NextApiResponse) => {
	const { uid, channelId, token } = req.body

	try {
		const result = await Channel.find({ _id: new mongoose.Types.ObjectId(sanitize(channelId)) }).lean()
		const userRole = result[0].managers.find((manager: IManager) => manager.uid === token.uid)?.role

		if (userRole === "Administrator" || userRole === "Owner" || userRole === "Editor") {
			const queryResult = await Channel.findOneAndUpdate(
				{ _id: new mongoose.Types.ObjectId(sanitize(channelId)) },
				{ $pull: { managers: { uid: sanitize(uid) } } },
				{ new: true }
			)

			if (queryResult) {
				return res.status(200).json({ success: true })
			}
		} else {
			return res.status(403).json({ error: true, message: "You do not have permission to add a new manager." })
		}
	} catch (error) {
		return res.status(500).json({
			error: true,
			message: "We did something wrong. Error Code 9942"
		})
	}
})

export default handler
