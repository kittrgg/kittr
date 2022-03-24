import { Channel } from "@Services/orm/models"
import { grabLoginName } from "./utils/grabLoginName"
import { getChannelData } from "./endpoints/getChannelData"
import { getSchedule } from "./endpoints/getSchedule"
import { getClips } from "./endpoints/getClips"
import { getRecentVideos } from "./endpoints/getRecentVideos"

/** Get a single channel's information for their profile page. */
export const profilePageQuery = async (twitchLink: string) => {
	const channelTwitchLogin = grabLoginName(twitchLink || "")

	const [channelData] = await getChannelData(channelTwitchLogin)

	if (!channelData)
		return {
			channelMetadata: null,
			schedule: [],
			clips: [],
			recentVideos: [],
			recentFollowers: []
		}

	const broadcaster_id = channelData.id

	const [schedule, clips, recentVideos] = await Promise.all([
		getSchedule(broadcaster_id),
		getClips(broadcaster_id),
		getRecentVideos(broadcaster_id)
	])

	return {
		channelData,
		schedule,
		clips,
		recentVideos
	}
}
