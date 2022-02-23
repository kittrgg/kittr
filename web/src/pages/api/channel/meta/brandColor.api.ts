import mongoose from "mongoose"
import type { NextApiRequest, NextApiResponse } from "next"
import { createHandler } from "@Middlewares/createHandler"
import Channel from "@Services/mongodb/models/Channel"
import { userAuth } from "@Middlewares/auth"
import { sanitize } from "@Services/mongodb/utils/sanitize"

const handler = createHandler(userAuth)

// Edit channel's brand color
handler.put(async (req: NextApiRequest, res: NextApiResponse) => {
	const { primaryColor, channelId } = req.body

	try {
		const data = await Channel.findByIdAndUpdate(
			{
				_id: new mongoose.Types.ObjectId(sanitize(channelId))
			},
			{
				$set: { "meta.brandColors.primary": sanitize(primaryColor) }
			},
			{ new: true }
		)

		return res.status(200).json(data)
	} catch (error) {
		return res.status(500).json({ isError: true, error })
	}
})

export default handler
