import mongoose from "mongoose"
import { NextApiRequest, NextApiResponse } from "next"
import { createHandler } from "@Middlewares/createHandler"
import Channel from "@Services/mongodb/models/Channel"
import { userAuth } from "@Middlewares/auth"
import { sanitize } from "@Services/mongodb/utils/sanitize"

const handler = createHandler(userAuth)

// Add a game to a channel
handler.post(async (req: NextApiRequest, res: NextApiResponse) => {
	const { gameId, channelId } = req.body

	try {
		const result = await Channel.findOneAndUpdate(
			{ _id: sanitize(channelId) },
			{
				$addToSet: {
					games: { id: new mongoose.Types.ObjectId(sanitize(gameId)) }
				}
			},
			{ upsert: true, new: true }
		)

		return res.status(200).json(result)
	} catch (error) {
		return res.status(400).json(error)
	}
})

export default handler
