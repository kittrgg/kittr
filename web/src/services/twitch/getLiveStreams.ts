import { Channel } from "@Services/mongodb/models"
import { headers } from "@Services/twitch/utils/auth"
import { serializeChannels } from "@Services/mongodb/utils/serializeChannels"
import { grabLoginName } from "./utils/grabLoginName"
import { logReport } from "@Services/rollbar/logReport"

export const liveChannelsQuery = async () => {
	const popularChannels = await Channel.aggregate<IChannel>([
		{
			$match: {
				"meta.hasProfileImage": true
			}
		},
		{
			$sort: {
				viewCount: -1
			}
		},
		{
			$limit: 100
		}
	])

	if (popularChannels.length === 0) return []

	// Create the url for the Twitch API fetch
	const buildLiveStreamRequest = (channels: IChannel[]): string => {
		try {
			const requestBase = "https://api.twitch.tv/helix/streams/?user_login="

			// Grab the login names from the channels
			const channelNames = channels
				.map((channel) => grabLoginName(channel.meta.links.twitch || ""))
				.filter((str: string | undefined) => str !== undefined)

			// Put together the base and the channel names
			const url = requestBase.concat(channelNames.join("&user_login="))
			return url
		} catch (error) {
			console.error(error)
			logReport.error("Twitch Live Channels API ", error as any)
			return ""
		}
	}

	const getStreams = async (): Promise<ITwitchLiveChannels[]> => {
		const url = buildLiveStreamRequest(popularChannels)

		if (!url) return []

		try {
			const response = await fetch(url, {
				method: "GET",
				headers: await headers(),
				redirect: "follow"
			})

			const { data } = await response.json()
			return data
		} catch (error) {
			console.error(error)
			logReport.error("Twitch Live Channels API ", error as any)
			return []
		}
	}

	const currentlyLiveChannels = await getStreams()
	try {
		const data = popularChannels.filter((channel) =>
			currentlyLiveChannels
				.map((channel) => channel.user_login)
				.includes(channel.meta.links.twitch?.substring(channel.meta.links.twitch.lastIndexOf("/") + 1) as string)
		)
		const serialized = await serializeChannels(data)

		return serialized
	} catch (error) {
		console.error(error)
		logReport.error("Twitch Live Channels API ", error as any)
		return []
	}
}
