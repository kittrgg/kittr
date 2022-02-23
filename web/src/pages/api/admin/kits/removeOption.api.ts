import type { NextApiRequest, NextApiResponse } from "next"
import { createHandler } from "@Utils/middlewares/createHandler"
import { adminAuth } from "@Utils/middlewares/auth"
import mongoose from "mongoose"
import { KitBase } from "@Services/mongodb/models"

const handler = createHandler(adminAuth)

// Delete a kit base
handler.delete(async (req: NextApiRequest, res: NextApiResponse) => {
	const { baseId, optionId } = req.body

	KitBase.findOneAndUpdate(
		{ _id: new mongoose.Types.ObjectId(baseId) },
		{
			$pull: {
				"gameInfo.availableOptions": { optionId }
			}
		},
		{ new: true },
		(errors, data) => {
			if (errors) return res.status(400).json({ success: false, errors })
			return res.status(200).json({ data })
		}
	)
})

export default handler
