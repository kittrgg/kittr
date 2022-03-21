import { ITwitchLiveChannels } from "@kittr/types/twitch"

import { headers } from "@Services/twitch/utils/auth"
import { serializeChannels } from "@Services/orm/utils/serializeChannels"
import { grabLoginName } from "./utils/grabLoginName"
import fetch from "@Fetch"
import { prisma, LinkProperties } from "@kittr/prisma"
import { ChannelWithLinks } from "@Types/prisma"

const getTwitchLink = (channel: ChannelWithLinks) =>
	channel.links.find((link) => link.property === LinkProperties.TWITCH)?.value ?? ""

export const liveChannelsQuery = async () => {
	const popularChannels = await prisma.channel.findMany({
		where: {
			profile: {
				hasProfileImage: true
			}
		},
		orderBy: { viewCount: "desc" },
		take: 100,
		include: {
			links: true
		}
	})

	console.log(popularChannels[0].links)

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

		const serialized = data.map((channel) => ({ ...channel, createdAt: channel.createdAt.toISOString() }))

		return serialized
	} catch (error) {
		console.error(error)
		return []
	}
}
