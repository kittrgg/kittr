import { getFromApi } from "../utils/getFromApi"

interface IFunc {
	/**
	 * @params
	 * broadcaster_id: Twitch broadcaster_id of the user.
	 *
	 * @returns
	 * Promise fulfilled with data.
	 *
	 */
	(broadcaster_id: string): Promise<ITwitchScheduleSegment[]>
}

/** Get the posted schedule for the user. */
export const getSchedule: IFunc = async (broadcaster_id) => {
	try {
		const { data } = await getFromApi<{ segments: ITwitchScheduleSegment[] }>({
			endpointBaseUrl: "https://api.twitch.tv/helix/schedule",
			queryParams: { broadcaster_id }
		})

		if (!data?.segments) return []
		return data.segments.filter((segment) => segment.is_recurring)
	} catch (error) {
		console.error(error)
		return []
	}
}
