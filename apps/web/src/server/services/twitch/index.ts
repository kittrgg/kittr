import { ITwitchChannelData, ITwitchClip, ITwitchScheduleSegment, ITwitchVideo } from "@kittr/types"
import { grabLoginName } from "@Services/twitch/utils/grabLoginName"
import { getChannelData } from "./getChannelData"
import { getClips } from "./getClips"
import { getRecentVideos } from "./getRecentVideos"
import { getSchedule } from "./getSchedule"

export interface ProfilePageData {
	channelData: ITwitchChannelData
	schedule: ITwitchScheduleSegment[]
	clips: ITwitchClip[]
	recentVideos: ITwitchVideo[]
}

export const getProfile = async (twitchLink: string): Promise<ProfilePageData> => {
	const channelTwitchLogin = grabLoginName(twitchLink || "")

	const [channelData] = await getChannelData(channelTwitchLogin)

	const broadcaster_id = channelData?.id

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
