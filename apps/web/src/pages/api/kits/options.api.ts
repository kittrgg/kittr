import mongoose from "mongoose"
import type { NextApiRequest, NextApiResponse } from "next"
import { createHandler } from "@Utils/middlewares/createHandler"
import { KitBase } from "@Services/orm/models"
import { sanitize } from "@Services/orm/utils/sanitize"

const handler = createHandler()

// Fetch options by kitId
handler.get(async (req: NextApiRequest, res: NextApiResponse) => {
	const { kitBaseId } = req.query

	try {
		const data = await KitBase.aggregate()
			.match({ _id: new mongoose.Types.ObjectId(sanitize(kitBaseId)) })
			.lookup({
				from: "kitoptions",
				let: { options: "$gameInfo.availableOptions.optionId" },
				pipeline: [{ $match: { $expr: { $in: ["$_id", "$$options"] } } }],
				as: "output"
			})
			.addFields({
				"gameInfo.availableOptions": {
					$map: {
						input: "$gameInfo.availableOptions",
						as: "opts",
						in: {
							$mergeObjects: [
								"$$opts",
								{
									displayName: {
										$arrayElemAt: ["$output.displayName", { $indexOfArray: ["$output._id", "$$opts.optionId"] }]
									}
								},
								{
									slotKey: { $arrayElemAt: ["$output.slotKey", { $indexOfArray: ["$output._id", "$$opts.optionId"] }] }
								}
							]
						}
					}
				}
			})

		return res.status(200).json({ data: data[0].gameInfo.availableOptions })
	} catch (error) {
		return res.status(500).json({ error })
	}
})

export default handler
