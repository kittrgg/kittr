import mongoose from "mongoose"
import type { NextApiRequest, NextApiResponse } from "next"
import { createHandler } from "@Middlewares/createHandler"
import Channel, { ChannelModel } from "@Services/mongodb/models/Channel"
import { userAuth } from "@Middlewares/auth"
import { sanitize } from "@Services/mongodb/utils/sanitize"

const handler = createHandler(userAuth)

// Edit command string for channel's game
handler.put(async (req: NextApiRequest, res: NextApiResponse<NextServerPayload<ChannelModel | null>>) => {
	const { commandString, gameId, channelId } = JSON.parse(req.body)

	try {
		const data = await Channel.findByIdAndUpdate(
			{ _id: new mongoose.Types.ObjectId(sanitize(channelId)) },
			{ $set: { "games.$[game].commandString": sanitize(commandString) } },
			{
				arrayFilters: [{ "game.id": new mongoose.Types.ObjectId(sanitize(gameId)) }],
				new: true
			}
		)

		return res.status(200).json(data)
	} catch (error) {
		return res.status(400).json({ error: true, errorMessage: JSON.stringify(error) })
	}
})

export default handler
