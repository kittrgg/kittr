import { getChannelData } from "./endpoints/getChannelData"
import { getClips } from "./endpoints/getClips"
import { getRecentVideos } from "./endpoints/getRecentVideos"
import { getSchedule } from "./endpoints/getSchedule"
import { grabLoginName } from "./utils/grabLoginName"
import { UnwrapPromise } from "@kittr/prisma"
import { ITwitchScheduleSegment, ITwitchClip, ITwitchChannelData, ITwitchVideo } from "@kittr/types"

interface ProfilePageData {
	channelData: ITwitchChannelData
	schedule: ITwitchScheduleSegment[]
	clips: ITwitchClip[]
	recentVideos: ITwitchVideo[]
}

/** Get a single channel's information for their profile page. */
export const profilePageQuery = async (twitchLink: string) => {
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

export type ProfilePageQueryReturnType = UnwrapPromise<ReturnType<typeof profilePageQuery>>
