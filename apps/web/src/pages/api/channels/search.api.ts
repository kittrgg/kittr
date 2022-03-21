import type { NextApiRequest, NextApiResponse } from "next"
import { createHandler } from "@Middlewares/createHandler"
import Channel from "@Services/orm/models/Channel"
import { sanitize } from "@Services/orm/utils/sanitize"

const handler = createHandler()

handler.get(async (req: NextApiRequest, res: NextApiResponse) => {
	const { searchTerm } = req.query

	try {
		const data = await Channel.aggregate([
			{
				$search: {
					index: "default",
					text: {
						query: sanitize(searchTerm),
						path: "displayName",
						fuzzy: {
							maxEdits: 2
						}
					}
				}
			},
			{ $sort: { viewCount: -1 } },
			{ $limit: 20 }
		])

		return res.status(200).json(data)
	} catch (errors) {
		return res.status(400).json({ error: true, errors })
	}
})

export default handler
