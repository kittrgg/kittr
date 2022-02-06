import { headers } from "@Services/twitch/utils/auth"
import fetch from "@Fetch"

interface IFunc {
	/**
	 * @params
	 * endpointBaseUrl: Twitch api endpoint to use as the base for the request.
	 *
	 * @returns
	 * Promise fulfilled with data.
	 *
	 */
	<T>(params: { endpointBaseUrl: string; queryParams: Record<string, string> }): Promise<{ data: T }>
}

/** Pretty naive implementation for getting data from the Twitch API. */
export const getFromApi: IFunc = async ({ endpointBaseUrl, queryParams }) => {
	const params = new URLSearchParams(queryParams)

	return await fetch.get({ url: `${endpointBaseUrl}?${params}`, headers: await headers(), redirect: "follow" })
}
