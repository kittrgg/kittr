import { getChannelData } from "./getChannelData"
import { getClips } from "./getClips"
import { getRecentVideos } from "./getRecentVideos"
import { getSchedule } from "./getSchedule"
import { grabLoginName } from "@kittr/twitch"
import {
	ITwitchChannelData,
	ITwitchClip,
	ITwitchScheduleSegment,
	ITwitchVideo
} from "@kittr/types"

export interface ProfilePageData {
	channelData: ITwitchChannelData
	schedule: ITwitchScheduleSegment[]
	clips: ITwitchClip[]
	recentVideos: ITwitchVideo[]
}

export const getProfile = async (
	twitchLink: string
): Promise<ProfilePageData> => {
	const channelTwitchLogin = grabLoginName(twitchLink || "")

	const [channelData] = await getChannelData(channelTwitchLogin)

	const broadcaster_id = channelData?.id

	if (!broadcaster_id) {
		return {
			channelData,
			schedule: [],
			clips: [],
			recentVideos: []
		}
	}

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
