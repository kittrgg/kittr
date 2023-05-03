import type { IOAuthToken, IOAuthRejection } from "@kittr/types/twitch"
import { fetcher } from "@kittr/utils"

/** Use OAuth to get a token for the Twitch API. */
export const getAuthToken = async () => {
if (!process.env.TWITCH_CLIENT_ID) {
	throw new Error("No TWITCH_CLIENT_ID")
}

if (!process.env.TWITCH_SECRET) {
	throw new Error("No TWITCH_SECRET")
}

	const tokenUrl = `https://id.twitch.tv/oauth2/token?client_id=${
		process.env.TWITCH_CLIENT_ID
	}&client_secret=${
		process.env.TWITCH_SECRET
	}&grant_type=client_credentials&scope=`

	try {
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		const data = await fetcher.post<any>({ url: tokenUrl, redirect: "follow" })

		if (data.access_token) {
			return data as IOAuthToken
		}
			throw data as IOAuthRejection

	} catch (error) {
		console.log({ twitchAuthError: error })
		throw { twitchAuthError: error }
	}
}

export const headers = async (): Promise<{"Client-ID": string | undefined, "Authorization": string}> => ({
	"Client-ID": process.env.TWITCH_CLIENT_ID,
	"Authorization": `Bearer ${(await getAuthToken()).access_token}`
})
