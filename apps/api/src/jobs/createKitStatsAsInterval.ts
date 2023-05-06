export {};

// Import mongoose from "mongoose"
// Import KitStat from "../models/KitStat"
// Import Player from "../models/Player"

// Const allKitBaseFeaturedRateQuery = async () => {
// 	Const result = await Player.aggregate([
// 		{
// 			$facet: {
// 				Count: [
// 					{
// 						$count: "channelCount"
// 					}
// 				],
// 				KitCounts: [
// 					{
// 						$unwind: "$kits"
// 					},
// 					{
// 						$match: {
// 							"kits.userData.featured": true
// 						}
// 					},
// 					{
// 						$group: {
// 							_id: "$kits.baseId",
// 							Matches: {
// 								$addToSet: {
// 									Base: "$kits.baseId",
// 									ChannelId: "$_id"
// 								}
// 							}
// 						}
// 					},
// 					{
// 						$project: {
// 							_id: "$_id",
// 							BaseCount: {
// 								$size: "$matches"
// 							}
// 						}
// 					}
// 				]
// 			}
// 		},
// 		{
// 			$addFields: {
// 				Count: {
// 					$arrayElemAt: ["$count.channelCount", 0]
// 				}
// 			}
// 		},
// 		{
// 			$project: {
// 				KitCounts: {
// 					$map: {
// 						Input: "$kitCounts",
// 						As: "item",
// 						In: {
// 							$mergeObjects: [
// 								"$$item",
// 								{
// 									ChannelCount: "$count",
// 									Ratio: {
// 										$divide: ["$$item.baseCount", "$count"]
// 									}
// 								}
// 							]
// 						}
// 					}
// 				}
// 			}
// 		}
// 	])

// 	Return result[0].kitCounts
// }

// Const allKitBaseUsageQuery = async () => {
// 	Const result = await Player.aggregate([
// 		{
// 			$facet: {
// 				Count: [
// 					{
// 						$count: "channelCount"
// 					}
// 				],
// 				KitCounts: [
// 					{
// 						$unwind: "$kits"
// 					},
// 					{
// 						$group: {
// 							_id: "$kits.baseId",
// 							Matches: {
// 								$addToSet: {
// 									Base: "$kits.baseId",
// 									ChannelId: "$_id"
// 								}
// 							}
// 						}
// 					},
// 					{
// 						$project: {
// 							_id: "$_id",
// 							BaseCount: {
// 								$size: "$matches"
// 							}
// 						}
// 					}
// 				]
// 			}
// 		},
// 		{
// 			$addFields: {
// 				Count: {
// 					$arrayElemAt: ["$count.channelCount", 0]
// 				}
// 			}
// 		},
// 		{
// 			$project: {
// 				KitCounts: {
// 					$map: {
// 						Input: "$kitCounts",
// 						As: "item",
// 						In: {
// 							$mergeObjects: [
// 								"$$item",
// 								{
// 									ChannelCount: "$count",
// 									Ratio: {
// 										$divide: ["$$item.baseCount", "$count"]
// 									}
// 								}
// 							]
// 						}
// 					}
// 				}
// 			}
// 		}
// 	])

// 	Return result[0].kitCounts
// }

// Const allSetupsForComparisonQuery = async () => {
// 	Const result = await Player.aggregate([
// 		{
// 			$unwind: {
// 				Path: "$kits"
// 			}
// 		},
// 		{
// 			$group: {
// 				_id: null,
// 				Kits: {
// 					$push: "$kits"
// 				}
// 			}
// 		},
// 		{
// 			$unwind: {
// 				Path: "$kits"
// 			}
// 		},
// 		{
// 			$group: {
// 				_id: "$kits.baseId",
// 				Matches: {
// 					$push: "$kits.options"
// 				}
// 			}
// 		}
// 	])

// 	Const serialized = result.map((channel: { _id: string; matches: Array<Array<mongoose.Types.ObjectId>> }) => ({
// 		...channel,
// 		Matches: channel.matches.map((match) => match.map((option) => option.toString()))
// 	}))

// 	Return serialized
// }

// Export const generateKitStats = async () => {
// 	Console.log("Creating new kit usage stats...")

// 	Const ratioOfChannelsWithBaseFeatured = await allKitBaseFeaturedRateQuery()
// 	Const ratioOfChannelsWithBase = await allKitBaseUsageQuery()
// 	Const forSetupComparison = await allSetupsForComparisonQuery()

// 	Try {
// 		Await KitStat.updateOne(
// 			{},
// 			{
// 				RatioOfChannelsWithBaseFeatured,
// 				RatioOfChannelsWithBase,
// 				ForSetupComparison
// 			},
// 			{ upsert: true }
// 		)
// 	} catch (error) {
// 		Console.log(error)
// 	}

// 	Console.log("Finished creating new kit usage stats.")
// }
