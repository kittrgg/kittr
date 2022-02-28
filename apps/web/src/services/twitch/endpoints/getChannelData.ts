import { ITwitchChannelData } from "@kittr/types/twitch"
import * as Logger from "@kittr/logger/node"
import { getFromApi } from "../utils/getFromApi"

interface IFunc {
	/**
	 * @params
	 * login: Twitch login for the user.
	 *
	 * @returns
	 * Promise fulfilled with Twitch schedule segments.
	 *
	 */
	(login: string): Promise<ITwitchChannelData[]>
}

/** Get the posted schedule for the user. */
export const getChannelData: IFunc = async (login) => {
	try {
		const { data } = await getFromApi<ITwitchChannelData[]>({
			endpointBaseUrl: "https://api.twitch.tv/helix/users",
			queryParams: { login }
		})

		return data
	} catch (error) {
		Logger.logError(error as unknown as Error)
		console.log({ twitchError: error })
		throw error
	}
}
