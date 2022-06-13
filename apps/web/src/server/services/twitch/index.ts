import { ITwitchScheduleSegment, ITwitchClip, ITwitchChannelData, ITwitchVideo } from "@kittr/types"
import { grabLoginName } from "@Services/twitch/utils/grabLoginName"
import { getChannelData } from "./getChannelData"
import { getSchedule } from "./getSchedule"
import { getClips } from "./getClips"
import { getRecentVideos } from "./getRecentVideos"

interface ProfilePageData {
	channelData: ITwitchChannelData
	schedule: ITwitchScheduleSegment[]
	clips: ITwitchClip[]
	recentVideos: ITwitchVideo[]
}

export const getProfile = async (twitchLink: string) => {
	let response = {} as ProfilePageData

	const channelTwitchLogin = grabLoginName(twitchLink || "")

	const [channelData] = await getChannelData(channelTwitchLogin)

	const broadcaster_id = channelData?.id

	const [schedule, clips, recentVideos] = await Promise.all([
		getSchedule(broadcaster_id),
		getClips(broadcaster_id),
		getRecentVideos(broadcaster_id)
	])

	response.channelData = channelData
	response.schedule = schedule
	response.clips = clips
	response.recentVideos = recentVideos

	return response
}
