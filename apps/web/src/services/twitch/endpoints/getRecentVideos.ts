import { ITwitchClip } from "@kittr/types/twitch"
import * as Logger from "@kittr/logger/node"
import { getFromApi } from "../utils/getFromApi"

interface IFunc {
	/**
	 * @params
	 * user_id: Twitch broadcaster_id of the user.
	 *
	 * @returns
	 * Promise fulfilled with Twitch videos for the user.
	 *
	 */
	(user_id: string): Promise<ITwitchClip[]>
}

export const getRecentVideos: IFunc = async (user_id) => {
	try {
		const { data } = await getFromApi<ITwitchClip[]>({
			endpointBaseUrl: "https://api.twitch.tv/helix/videos",
			queryParams: { user_id }
		})

		return data
	} catch (error) {
		Logger.logError(error as unknown as Error)
		console.log({ twitchError: error })
		throw error
	}
}
