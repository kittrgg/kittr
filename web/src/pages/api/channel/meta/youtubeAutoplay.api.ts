import type { NextApiRequest, NextApiResponse } from "next"
import { createHandler } from "@Middlewares/createHandler"
import Channel, { ChannelModel } from "@Services/mongodb/models/Channel"
import { userAuth } from "@Utils/middlewares/auth"
import { sanitize } from "@Services/mongodb/utils/sanitize"

const handler = createHandler(userAuth)

// Edit youtube autoplay setting
handler.put(async (req: NextApiRequest, res: NextApiResponse<NextServerPayload<ChannelModel | null>>) => {
	const { _id, boolean } = req.body

	try {
		const data = await Channel.findByIdAndUpdate(
			{ _id: sanitize(_id) },
			{ $set: { "meta.youtubeAutoplay": sanitize(boolean) } },
			{ new: true }
		)

		return res.status(200).json(data)
	} catch (error) {
		return res.status(400).json({ error: true, errorMessage: JSON.stringify(error) })
	}
})

export default handler
