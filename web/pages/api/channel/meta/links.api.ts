import mongoose from "mongoose"
import type { NextApiRequest, NextApiResponse } from "next"
import { createHandler } from "@Middlewares/createHandler"
import Channel from "@Services/mongodb/models/Channel"
import { userAuth } from "@Utils/middlewares/auth"
import { sanitize } from "@Services/mongodb/utils/sanitize"

const handler = createHandler(userAuth)

// Edit channel's links
handler.put(async (req: NextApiRequest, res: NextApiResponse) => {
	const { _id, links } = req.body

	try {
		let newLinks = {} as { [key: string]: string }

		links.forEach((elem: [string, string]) => {
			newLinks[elem[0]] = elem[1]
		})

		const data = await Channel.findByIdAndUpdate(
			{ _id: new mongoose.Types.ObjectId(sanitize(_id)) },
			{ $set: { "meta.links": newLinks } },
			{ new: true }
		)
		return res.status(200).json(data)
	} catch (error) {
		return res.status(400).json(error)
	}
})

export default handler
