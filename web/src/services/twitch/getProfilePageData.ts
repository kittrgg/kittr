import { Channel } from "@Services/mongodb/models"
import { grabLoginName } from "./utils/grabLoginName"
import { getChannelData } from "./endpoints/getChannelData"
import { getSchedule } from "./endpoints/getSchedule"
import { getClips } from "./endpoints/getClips"
import { getRecentVideos } from "./endpoints/getRecentVideos"

/** Get a single channel's information for their profile page. */
export const profilePageQuery = async (urlSafeName: string) => {
	console.log("Started profilePageQuery...")
	const [rawChannel] = await Channel.aggregate<{ twitchUrl: string }>([
		{
			$match: {
				urlSafeName: urlSafeName
			}
		},
		{
			$project: {
				twitchUrl: "$meta.links.twitch"
			}
		}
	])

	if (!rawChannel) return null

	const channelTwitchLogin = grabLoginName(rawChannel.twitchUrl || "")

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

	console.log("Finishing profilePagequery...")
	return {
		channelData,
		schedule,
		clips,
		recentVideos
	}
}
