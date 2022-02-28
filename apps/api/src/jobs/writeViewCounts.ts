import { BetaAnalyticsDataClient } from "@google-analytics/data/build/src/v1beta"
import { StreamerViewCounts } from "@kittr/types"
import Player from "../models/Player"

const analyticsDataClient = new BetaAnalyticsDataClient({
	credentials: JSON.parse(process.env.GOOGLE_APPLICATION_CREDENTIALS || "{}")
})

const analyticsReportSchemas = {
	property: "properties/276805067",
	metrics: [
		{
			name: "screenPageViews"
		}
	],
	dimensions: [
		{
			name: "pagePath"
		}
	]
}

const getStreamerViewCounts = async (
	dateRange: StreamerViewCounts
): Promise<Record<string, number>> => {
	console.log("Trying to streamer view counts...")

	try {
		const [response] = await analyticsDataClient.runReport({
			...analyticsReportSchemas,
			dateRanges: [dateRange],
			dimensionFilter: {
				andGroup: {
					expressions: [
						{
							filter: {
								fieldName: "pagePath",
								stringFilter: {
									matchType: "BEGINS_WITH",
									value: "/channel/"
								}
							}
						}
					]
				}
			}
		})

		return response.rows!.reduce((acc, row) => {
			/**
			 * This splits the string coming in as the example below:
			 *
			 * /players/HusKerrs/warzone"
			 *
			 * "", "players", "HusKerrs", "warzone"
			 *
			 * returns HusKerrs
			 */
			const streamer =
				row.dimensionValues?.[0].value?.split("/").slice(0, 3)[2] ?? ""

			// If streamer counts already exist in object, add new counts to existing
			if (acc[streamer]) {
				const count = acc[streamer]
				acc[streamer] = count + parseFloat(row.metricValues?.[0].value ?? "")
			} else {
				acc[streamer] = parseFloat(row.metricValues?.[0].value ?? "")
			}
			return acc
		}, {} as Record<string, number>)
	} catch (error) {
		console.log({ error })
		throw error
	}
}

export const writeViewCounts = async () => {
	const now = new Date()
	const monthAgo = new Date()
	monthAgo.setMonth(now.getMonth() - 1)

	const streamerData = await getStreamerViewCounts({
		startDate: `${monthAgo.getUTCFullYear()}-${
			monthAgo.getUTCMonth() + 1
		}-${monthAgo.getUTCDate()}`,
		endDate: `${now.getUTCFullYear()}-${
			now.getUTCMonth() + 1
		}-${now.getUTCDate()}`
	})

	const bulkWrites = Object.entries(streamerData).map(
		([urlSafeName, viewCount]) => ({
			updateOne: {
				filter: { urlSafeName },
				update: { $set: { viewCount } }
			}
		})
	)
	console.log("Starting bulk write...")
	await Player.bulkWrite([
		...bulkWrites,
		{
			updateMany: {
				filter: { displayName: { $nin: Object.keys(streamerData) } },
				update: { $set: { viewCount: 0 } }
			}
		}
	])
	console.log("Bulk write for view counts finished!")
}
