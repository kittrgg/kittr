import { getFromApi } from "../utils/getFromApi"
// import { logger } from "@Services/sentry"

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
	} catch (error: any) {
		console.error(error)
		// This error was going to very quickly send us over our Sentry limits so let's get rid of it.
		// logger.exception(error)
		return []
	}
}
