import type { NextApiRequest, NextApiResponse } from "next"
import { createHandler } from "@Utils/middlewares/createHandler"
import { userAuth } from "@Utils/middlewares/auth"
import mongoose from "mongoose"
import Channel, { ChannelModel } from "@Services/mongodb/models/Channel"
import { sanitize } from "@Services/mongodb/utils/sanitize"

const handler = createHandler(userAuth)

// Change the owner of the channel
handler.put(async (req: NextApiRequest, res: NextApiResponse<NextServerPayload<ChannelModel>>) => {
	const { channelId, previousOwner, newOwner, token } = JSON.parse(req.body)

	try {
		const result = await Channel.find({ _id: new mongoose.Types.ObjectId(sanitize(channelId)) }).lean()
		const userRole = result[0].managers.find((manager: IManager) => manager.uid === token.uid)?.role

		if (userRole === "Owner") {
			const newChannel = {
				...result[0],
				managers: result[0].managers.map((elem: IManager) => {
					if (elem.uid === previousOwner.uid) return { uid: previousOwner.uid, role: "Administrator" }
					if (elem.uid === newOwner.uid) return { uid: newOwner.uid, role: "Owner" }
					return elem
				})
			}

			const queryResult = await Channel.replaceOne(
				{ _id: new mongoose.Types.ObjectId(sanitize(channelId)) },
				newChannel
			)

			if (queryResult) {
				return res.status(200).json(queryResult)
			}
		} else {
			return res.status(403).json({ error: true, errorMessage: "You do not have permission to add a new manager." })
		}
	} catch (error) {
		return res.status(500).json({
			error: true,
			errorMessage: "We did something wrong. Error Code 2347"
		})
	}
})

export default handler
