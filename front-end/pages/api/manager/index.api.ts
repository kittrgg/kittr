import type { NextApiRequest, NextApiResponse } from "next"
import { createHandler } from "@Utils/middlewares/createHandler"
import { userAuth } from "@Utils/middlewares/auth"
import { Channel } from "@Services/mongodb/models"
import { sanitize } from "@Services/mongodb/utils/sanitize"

const handler = createHandler(userAuth)

// Get all channels that user is a manager of
handler.get(async (req: NextApiRequest, res: NextApiResponse) => {
	const { uid } = req.body.token

	try {
		const result = await Channel.aggregate([
			{
				$match: {
					managers: {
						$elemMatch: {
							uid: sanitize(uid)
						}
					}
				}
			},
			{
				$addFields: {
					role: {
						$filter: {
							input: "$managers",
							as: "user",
							cond: { $eq: ["$$user.uid", sanitize(uid)] }
						}
					}
				}
			}
		])

		return res.status(200).json(result)
	} catch (error) {
		return res.status(400).json(error)
	}
})

export default handler
