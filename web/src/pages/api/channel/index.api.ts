import type { NextApiRequest, NextApiResponse } from "next"
import { createHandler } from "@Utils/middlewares/createHandler"
import { userAuth } from "@Utils/middlewares/auth"
import mongoose from "mongoose"
import { Channel } from "@Services/mongodb/models"
import { sanitize } from "@Services/mongodb/utils/sanitize"
import { getRawChannelProfileByIdQuery } from "@Services/mongodb"

const handler = createHandler(userAuth)

handler.get(async (req: NextApiRequest, res: NextApiResponse) => {
	const { _id } = req.query

	const profile = await getRawChannelProfileByIdQuery(_id as string)

	return res.status(200).json(profile)
})

// Remove a channel from existence...Or just the database
handler.delete(async (req: NextApiRequest, res: NextApiResponse) => {
	const { _id } = req.body

	try {
		const result = await Channel.findOneAndDelete({ _id: new mongoose.Types.ObjectId(sanitize(_id)) }, null)

		if (result) {
			return res.status(200).json({ deleted: true })
		}
	} catch (error) {
		return res.status(500).json({ error })
	}
})

export default handler
