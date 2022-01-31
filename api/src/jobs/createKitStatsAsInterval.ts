import mongoose from "mongoose"
import KitStat from "../models/KitStat"
import Player from "../models/Player"

const allKitBaseFeaturedRateQuery = async () => {
	const result = await Player.aggregate([
		{
			$facet: {
				count: [
					{
						$count: "channelCount"
					}
				],
				kitCounts: [
					{
						$unwind: "$kits"
					},
					{
						$match: {
							"kits.userData.featured": true
						}
					},
					{
						$group: {
							_id: "$kits.baseId",
							matches: {
								$addToSet: {
									base: "$kits.baseId",
									channelId: "$_id"
								}
							}
						}
					},
					{
						$project: {
							_id: "$_id",
							baseCount: {
								$size: "$matches"
							}
						}
					}
				]
			}
		},
		{
			$addFields: {
				count: {
					$arrayElemAt: ["$count.channelCount", 0]
				}
			}
		},
		{
			$project: {
				kitCounts: {
					$map: {
						input: "$kitCounts",
						as: "item",
						in: {
							$mergeObjects: [
								"$$item",
								{
									channelCount: "$count",
									ratio: {
										$divide: ["$$item.baseCount", "$count"]
									}
								}
							]
						}
					}
				}
			}
		}
	])

	return result[0].kitCounts
}

const allKitBaseUsageQuery = async () => {
	const result = await Player.aggregate([
		{
			$facet: {
				count: [
					{
						$count: "channelCount"
					}
				],
				kitCounts: [
					{
						$unwind: "$kits"
					},
					{
						$group: {
							_id: "$kits.baseId",
							matches: {
								$addToSet: {
									base: "$kits.baseId",
									channelId: "$_id"
								}
							}
						}
					},
					{
						$project: {
							_id: "$_id",
							baseCount: {
								$size: "$matches"
							}
						}
					}
				]
			}
		},
		{
			$addFields: {
				count: {
					$arrayElemAt: ["$count.channelCount", 0]
				}
			}
		},
		{
			$project: {
				kitCounts: {
					$map: {
						input: "$kitCounts",
						as: "item",
						in: {
							$mergeObjects: [
								"$$item",
								{
									channelCount: "$count",
									ratio: {
										$divide: ["$$item.baseCount", "$count"]
									}
								}
							]
						}
					}
				}
			}
		}
	])

	return result[0].kitCounts
}

const allSetupsForComparisonQuery = async () => {
	const result = await Player.aggregate([
		{
			$unwind: {
				path: "$kits"
			}
		},
		{
			$group: {
				_id: null,
				kits: {
					$push: "$kits"
				}
			}
		},
		{
			$unwind: {
				path: "$kits"
			}
		},
		{
			$group: {
				_id: "$kits.baseId",
				matches: {
					$push: "$kits.options"
				}
			}
		}
	])

	const serialized = result.map((channel: { _id: string; matches: Array<Array<mongoose.Types.ObjectId>> }) => {
		return {
			...channel,
			matches: channel.matches.map((match) => {
				return match.map((option) => {
					return option.toString()
				})
			})
		}
	})

	return serialized
}

export const generateKitStats = async () => {
	console.log("Creating new kit usage stats...")

	const ratioOfChannelsWithBaseFeatured = await allKitBaseFeaturedRateQuery()
	const ratioOfChannelsWithBase = await allKitBaseUsageQuery()
	const forSetupComparison = await allSetupsForComparisonQuery()

	try {
		await KitStat.updateOne(
			{},
			{
				ratioOfChannelsWithBaseFeatured,
				ratioOfChannelsWithBase,
				forSetupComparison
			},
			{ upsert: true }
		)
	} catch (error) {
		console.log(error)
	}

	console.log("Finished creating new kit usage stats.")
}
