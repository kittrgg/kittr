import type { NextApiRequest, NextApiResponse } from "next"
import { createHandler } from "@Utils/middlewares/createHandler"
import { Channel } from "@Services/mongodb/models"
import { sanitize } from "@Services/mongodb/utils/sanitize"

const handler = createHandler()

handler.put(async (req: NextApiRequest, res: NextApiResponse) => {
	const { urlSafeName } = JSON.parse(req.body)

	try {
		const result = await Channel.findOneAndUpdate(
			{ urlSafeName: sanitize(urlSafeName) },
			{ $inc: { viewCount: 1 } },
			{ new: true }
		)

		if (result) {
			return res.status(200).json({ incremented: true })
		}
	} catch (error) {
		return res.status(500).json({ error: true, message: "Error Code 1234" })
	}
})

export default handler
