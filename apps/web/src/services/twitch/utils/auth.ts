import fetch from "@Fetch"
import { IOAuthToken, IOAuthRejection } from "@kittr/types/twitch"

/** Use OAuth to get a token for the Twitch API. */
export const getAuthToken = async () => {
	const tokenUrl = `https://id.twitch.tv/oauth2/token?client_id=${
		process.env.TWITCH_CLIENT_ID as string
	}&client_secret=${process.env.TWITCH_SECRET as string}&grant_type=client_credentials&scope=`

	try {
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		const data = await fetch.post<any>({ url: tokenUrl, redirect: "follow" })

		if (data.access_token) {
			return data as IOAuthToken
		} else {
			throw data as IOAuthRejection
		}
	} catch (error) {
		console.log({ twitchAuthError: error })
		throw { twitchAuthError: error }
	}
}

export const headers = async () => ({
	"Client-ID": process.env.TWITCH_CLIENT_ID as string,
	"Authorization": `Bearer ${(await getAuthToken()).access_token}`
})
