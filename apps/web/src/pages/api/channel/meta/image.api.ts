import type { NextApiRequest, NextApiResponse } from "next"
import { NextServerPayload } from "@kittr/types"
import { createHandler } from "@Utils/middlewares/createHandler"
import mongoose from "mongoose"
import { Channel } from "@Services/orm/models"
import { ChannelModel } from "@Services/orm/models/Channel"
import { userAuth } from "@Middlewares/auth"
import { sanitize } from "@Services/orm/utils/sanitize"

const handler = createHandler(userAuth)

handler.post(async (req: NextApiRequest, res: NextApiResponse<NextServerPayload<ChannelModel | null>>) => {
	const { _id } = JSON.parse(req.body)

	try {
		const data = await Channel.findOneAndUpdate(
			{ _id: new mongoose.Types.ObjectId(sanitize(_id)) },
			{ $set: { "meta.hasProfileImage": true, "meta.profileImage": sanitize(_id) } }
		)

		return res.status(200).json(data)
	} catch (error) {
		return res.status(400).json({ error: true, errorMessage: JSON.stringify(error) })
	}
})

export default handler
