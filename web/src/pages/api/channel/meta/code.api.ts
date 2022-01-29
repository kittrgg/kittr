import mongoose from "mongoose"
import type { NextApiRequest, NextApiResponse } from "next"
import { createHandler } from "@Middlewares/createHandler"
import Channel from "@Services/mongodb/models/Channel"
import { userAuth } from "@Middlewares/auth"
import { sanitize } from "@Services/mongodb/utils/sanitize"

const handler = createHandler(userAuth)

// Edit channel's creator code for the specific game
handler.put(async (req: NextApiRequest, res: NextApiResponse) => {
	const { code, gameId, channelId } = req.body

	try {
		const data = await Channel.findByIdAndUpdate(
			{
				_id: new mongoose.Types.ObjectId(sanitize(channelId))
			},
			{ $set: { "games.$[game].code": sanitize(code) } },
			{
				arrayFilters: [{ "game.id": new mongoose.Types.ObjectId(sanitize(gameId)) }],
				new: true
			}
		)

		return res.status(200).json(data)
	} catch (error) {
		return res.status(400).json(error)
	}
})

export default handler
