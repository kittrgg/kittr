import mongoose from "mongoose"
import { Channel } from "@Services/mongodb/models"
import { headers } from "@Services/twitch/utils/auth"
import { grabLoginName } from "@Services/twitch/utils/grabLoginName"
import fetch from "@Fetch"

/** Use a channel's display name to get their current Twitch info. */
export const getTwitchChannelInfo = async (channelId: string): Promise<IHomePageBoostr | null> => {
	try {
		let channelAgg = []
		if (channelId) {
			channelAgg = await Channel.aggregate([
				{
					$match: {
						_id: new mongoose.Types.ObjectId(channelId)
					}
				},
				{
					$addFields: {
						kitCount: {
							$size: "$kits"
						}
					}
				},
				{
					$project: {
						meta: 1,
						kitCount: 1
					}
				}
			])
		}

		const profileImage = channelAgg[0]?.meta.profileImage || "/media/logo.svg"
		const kitCount = channelAgg[0]?.kitCount || 0
		const loginName = channelAgg[0] ? grabLoginName(channelAgg[0].meta.links.twitch || "") : "kittrgg"
		const twitchLink = channelAgg[0]?.meta.links.twitch || "https://twitch.tv/kittrgg"

		const getInfo = async () => {
			try {
				const fetchInfo = await fetch.get<{ data: any }>({
					url: `https://api.twitch.tv/helix/streams?user_login=${loginName}`,
					headers: await headers(),
					redirect: "follow"
				})

				const {
					data: [user]
				} = fetchInfo

				if (!user) {
					// We won't put you up if you aren't live!
					return null
				}

				return {
					twitchName: user.user_name,
					game: user.game_name,
					viewerCount: user.viewer_count,
					profileImage,
					kitCount,
					twitchLink
				}
			} catch (error) {
				throw error
			}
		}

		return await getInfo()
	} catch (err) {
		console.log(err)
		throw err
	}
}
