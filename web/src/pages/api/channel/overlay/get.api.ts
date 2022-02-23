import type { NextApiRequest, NextApiResponse } from "next"
import { createHandler } from "@Utils/middlewares/createHandler"
import { getRawChannelProfileByIdQuery } from "@Services/mongodb"

const handler = createHandler()

// Get overlay data for a user
handler.get(async (req: NextApiRequest, res: NextApiResponse) => {
	const { _id } = req.query

	const profile = await getRawChannelProfileByIdQuery(_id as string)

	return res.status(200).json(profile.overlay)
})

export default handler
