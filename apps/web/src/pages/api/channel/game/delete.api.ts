import mongoose from "mongoose"
import { NextApiRequest, NextApiResponse } from "next"
import { NextServerPayload } from "@kittr/types"
import { createHandler } from "@Middlewares/createHandler"
import Channel, { ChannelModel } from "@Services/mongodb/models/Channel"
import { userAuth } from "@Middlewares/auth"
import { sanitize } from "@Services/mongodb/utils/sanitize"

const handler = createHandler(userAuth)

// Delete a game AND the game's associated kits from a channel
handler.delete(async (req: NextApiRequest, res: NextApiResponse<NextServerPayload<ChannelModel>>) => {
	const { gameId, channelId } = JSON.parse(req.body)

	try {
		const aggResult = await Channel.aggregate([
			{ $match: { _id: new mongoose.Types.ObjectId(sanitize(channelId)) } },
			{
				$lookup: {
					from: "kitbases",
					let: { kits: "$kits.baseId" },
					pipeline: [{ $match: { $expr: { $in: [{ $toString: "$_id" }, "$$kits"] } } }],
					as: "output"
				}
			},
			{
				$addFields: {
					kits: {
						$map: {
							input: "$kits",
							as: "bases",
							in: {
								$mergeObjects: [
									"$$bases",
									{
										gameId: {
											$arrayElemAt: [
												"$output.gameId",
												{ $indexOfArray: ["$output._id", { $toObjectId: "$$bases.baseId" }] }
											]
										}
									}
								]
							}
						}
					}
				}
			},
			{
				$project: {
					output: 0
				}
			},
			{
				$addFields: {
					games: {
						$filter: {
							input: "$games",
							as: "game",
							cond: { $ne: ["$$game.id", new mongoose.Types.ObjectId(sanitize(gameId))] }
						}
					},
					kits: {
						$filter: {
							input: "$kits",
							as: "kit",
							cond: { $ne: ["$$kit.gameId", new mongoose.Types.ObjectId(sanitize(gameId))] }
						}
					}
				}
			}
		])

		const update = await Channel.findOneAndUpdate(
			{ _id: sanitize(channelId) },
			{
				$set: {
					games: aggResult[0].games,
					kits: aggResult[0].kits
				}
			},
			{ upsert: true, new: true }
		)

		return res.status(200).json(update)
	} catch (error) {
		// console.error("hello?", error)
		return res.status(400).json({ error: true, errorMessage: JSON.stringify(error) })
	}
})

export default handler
