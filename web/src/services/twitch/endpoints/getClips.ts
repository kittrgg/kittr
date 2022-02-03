import { getFromApi } from "../utils/getFromApi"

interface IFunc {
	/**
	 * @params
	 * broadcaster_id: Twitch broadcaster_id of the user.
	 *
	 * @returns
	 * Promise fulfilled with Twitch clips for the user.
	 *
	 */
	(broadcaster_id: string): Promise<ITwitchClip[]>
}

export const getClips: IFunc = async (broadcaster_id): Promise<ITwitchClip[]> => {
	try {
		const { data } = await getFromApi<ITwitchClip[]>({
			endpointBaseUrl: "https://api.twitch.tv/helix/clips",
			queryParams: { broadcaster_id }
		})

		return data || []
	} catch (error) {
		throw error
	}
}
