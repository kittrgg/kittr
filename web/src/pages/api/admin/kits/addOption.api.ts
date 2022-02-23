import type { NextApiRequest, NextApiResponse } from "next"
import { createHandler } from "@Utils/middlewares/createHandler"
import { adminAuth } from "@Utils/middlewares/auth"
import mongoose from "mongoose"
import { KitBase } from "@Services/mongodb/models"

const handler = createHandler(adminAuth)

// Add a kit option to the kit base as a possibility for the user to add to their kit
handler.post(async (req: NextApiRequest, res: NextApiResponse) => {
	const { baseId, optionId, orderPlacement } = JSON.parse(req.body)

	KitBase.findOneAndUpdate(
		{ _id: new mongoose.Types.ObjectId(baseId) },
		{
			$push: {
				"gameInfo.availableOptions": {
					orderPlacement,
					optionId: new mongoose.Types.ObjectId(optionId)
				}
			}
		},
		{ new: true },
		(err, data) => {
			if (err) {
				return res.status(500).json({ err })
			}

			return res.status(200).json({ data })
		}
	)
})

export default handler
