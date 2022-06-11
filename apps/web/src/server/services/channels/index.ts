import fetch from "@Fetch"
import { Channel, ChannelLink, ChannelProfile, LinkProperty, prisma } from "@kittr/prisma"
import { ITwitchLiveChannels } from "@kittr/types"
import { getTopChannelsWithLinksQuery } from "@Services/orm"
import { headers } from "@Services/twitch/utils/auth"
import { grabLoginName } from "@Services/twitch/utils/grabLoginName"

interface ChannelWithProfile extends Channel {
	profile: ChannelProfile
}

interface ChannelWithLinks extends Channel {
	links: ChannelLink[]
}

const getTwitchLink = (channel: ChannelWithLinks) =>
	channel.links.find((link) => link.property === LinkProperty.TWITCH)?.value ?? ""

export const listTopChannels = async () => {
	const result = await prisma.channel.findMany({
		where: {
			profile: {
				hasProfileImage: process.env.IS_DEV ? undefined : true
			}
		},
		orderBy: {
			viewCount: "desc"
		},
		take: 10,
		include: {
			profile: true
		}
	})

	return result as ChannelWithProfile[]
}

export const listRisingChannels = async () => {
	const skip = 10
	const take = 10
	const where = {
		profile: {
			hasProfileImage: process.env.IS_DEV ? undefined : true
		},
		viewCount: {
			gte: 400
		}
	}

	const channelCount = await prisma.channel.count({
		where
	})

	const randomSkip = Math.min(channelCount - skip, Math.max(skip, Math.floor(Math.random() * channelCount)))

	const result = await prisma.channel.findMany({
		orderBy: {
			viewCount: "desc"
		},
		where,
		skip: randomSkip,
		take,
		include: {
			profile: true
		}
	})

	return result as ChannelWithProfile[]
}

export const listLiveChannels = async () => {
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

		return data as ChannelWithLinks[]
	} catch (error) {
		console.error(error)
		return []
	}
}
