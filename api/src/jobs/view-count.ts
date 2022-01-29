import { BetaAnalyticsDataClient } from "@google-analytics/data"

import mongoose from "mongoose"
import Player from "../models/Player"

console.log("Starting bulk update")

const analyticsDataClient = new BetaAnalyticsDataClient({
	credentials: JSON.parse(process.env.GOOGLE_APPLICATION_CREDENTIALS as string)
})

const analyticsReportSchemas = {
	property: `properties/276805067`,
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

const getStreamerViewCounts = async (dateRange: { startDate: string; endDate: string }) => {
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
									value: "/players/"
								}
							}
						}
					]
				}
			}
		})

		return response.rows?.reduce((acc, row) => {
			/**
			 * This splits the string coming in as the example below:
			 *
			 * /players/HusKerrs/warzone"
			 *
			 * "", "players", "HusKerrs", "warzone"
			 *
			 * returns HusKerrs
			 */
			const channel = row.dimensionValues?.[0].value?.split("/").slice(0, 3)[2] ?? ""
			const countToAdd = row.metricValues?.[0].value ?? "0"

			const addToExistingCount = (currentCount: number, newCount: string) => currentCount + parseFloat(newCount)
			const viewsPerChannel = acc[channel] ? addToExistingCount(acc[channel], countToAdd) : parseFloat(countToAdd)

			acc[channel] = viewsPerChannel
			return acc
		}, {} as Record<string, number>)
	} catch (error) {
		console.log({ error })
		throw error
	}
}

;(async () => {
	const now = new Date()
	let monthAgo = new Date()
	monthAgo.setMonth(now.getMonth() - 1)

	console.log(
		`${now.getUTCFullYear()}-${now.getUTCMonth() + 1}-${now.getUTCDate()}`,
		`${monthAgo.getUTCFullYear()}-${monthAgo.getUTCMonth() + 1}-${monthAgo.getUTCDate()}`
	)
	const streamerData =
		(await getStreamerViewCounts({
			startDate: `${monthAgo.getUTCFullYear()}-${monthAgo.getUTCMonth() + 1}-${monthAgo.getUTCDate()}`,
			endDate: `${now.getUTCFullYear()}-${now.getUTCMonth() + 1}-${now.getUTCDate()}`
		})) ?? {}

	const bulkWrites = Object.entries(streamerData).map(([urlSafeName, viewCount]) => ({
		updateOne: {
			filter: { urlSafeName: urlSafeName },
			update: { $set: { viewCount: viewCount } }
		}
	}))

	mongoose.connect(process.env.DB_CONNECTION_STRING as string).then(async (mongooseCtx) => {
		console.time("Bulk Write Operation")
		await Player.bulkWrite([
			...bulkWrites,
			{
				updateMany: {
					filter: { displayName: { $nin: Object.keys(streamerData) } },
					update: { $set: { viewCount: 0 } }
				}
			}
		])
		console.timeEnd("Bulk Write Operation")

		mongooseCtx.connection.close()
	})
})()
