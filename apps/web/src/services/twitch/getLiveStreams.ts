import { grabLoginName } from "./utils/grabLoginName"
import fetch from "@Fetch"
import { getTopChannelsWithLinksQuery } from "@Services/orm/queries/channels"
import { headers } from "@Services/twitch/utils/auth"
import { LinkProperty } from "@kittr/prisma"
import { Channel, ChannelLink } from "@kittr/prisma"
import { ITwitchLiveChannels } from "@kittr/types/twitch"

export interface ChannelWithLinks extends Channel {
	links: ChannelLink[]
}

const getTwitchLink = (channel: ChannelWithLinks) =>
	channel.links.find((link) => link.property === LinkProperty.TWITCH)?.value ?? ""

export const liveChannelsQuery = async () => {
	const popularChannels = await getTopChannelsWithLinksQuery({ take: 100 })

	// Create the url for the Twitch API fetch
	const buildLiveStreamRequest = (channels: ChannelWithLinks[]): string => {
		try {
			const requestBase = "https://api.twitch.tv/helix/streams/?user_login="

			// Grab the login names from the channels
			const channelNames = channels
				.map((channel) => grabLoginName(getTwitchLink(channel)))
				.filter((str: string | undefined) => str !== undefined)

			// Put together the base and the channel names
			const url = requestBase.concat(channelNames.join("&user_login="))
			return url
		} catch (error) {
			console.error(error)
			// logReport.error("Twitch Live Channels API ", error as any)
			return ""
		}
	}

	const getStreams = async (): Promise<ITwitchLiveChannels[]> => {
		const url = buildLiveStreamRequest(popularChannels)

		if (!url) return []

		try {
			const data = await fetch.get<{ data: any }>({ url, headers: await headers(), redirect: "follow" })

			if (!data.data) {
				console.log("The Twitch API fetch did not work.", { data })
				return []
			}

			return data.data
		} catch (error) {
			console.error(error)
			return []
		}
	}

	const currentlyLiveChannels = await getStreams()

	try {
		const data = popularChannels.filter((channel) =>
			currentlyLiveChannels
				.map((channel) => channel.user_login)
				.includes(getTwitchLink(channel).substring(getTwitchLink(channel).lastIndexOf("/") + 1) as string)
		)

		return data
	} catch (error) {
		console.error(error)
		return []
	}
}
