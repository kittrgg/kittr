import { Channel } from "@Services/mongodb/models"

interface IFunction {
	/**
	 * @returns
	 * Promise containing usage rates for all kit bases
	 *
	 */
	(): Promise<
		Array<{
			_id: string
			baseCount: number
			channelCount: number
			ratio: number
		}>
	>
}

/**
 * SERVER SIDE ONLY!
 *
 * Get the rates for Kit Base utilization by channels on the platform.
 */
export const allKitBaseUsageQuery: IFunction = async () => {
	const result = await Channel.aggregate([
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
