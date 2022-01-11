import { Channel } from "@Services/mongodb/models"
import { headers } from "@Services/twitch/utils/auth"
import { serializeChannels } from "@Services/mongodb/utils/serializeChannels"
import { grabLoginName } from "./utils/grabLoginName"

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

	const buildLiveStreamRequest = (channels: IChannel[]): string => {
		const requestBase = "https://api.twitch.tv/helix/streams/?user_login="
		const channelNames = channels
			.map((channel) => grabLoginName(channel.meta.links.twitch || ""))
			.filter((str: string | undefined) => str !== undefined)

		const url = requestBase.concat(channelNames.join("&user_login="))

		return url
	}

	const getStreams = async (): Promise<ITwitchLiveChannels[]> => {
		try {
			const response = await fetch(buildLiveStreamRequest(popularChannels), {
				method: "GET",
				headers: await headers(),
				redirect: "follow"
			})

			const { data } = await response.json()
			return data
		} catch (error) {
			throw error
		}
	}

	const currentlyLiveChannels = await getStreams()

	const data = popularChannels.filter((channel) =>
		currentlyLiveChannels
			.map((channel) => channel.user_login)
			.includes(channel.meta.links.twitch?.substring(channel.meta.links.twitch.lastIndexOf("/") + 1) as string)
	)
	const serialized = await serializeChannels(data)

	return serialized
}
