/** Use OAuth to get a token for the Twitch API. */
export const getAuthToken = async () => {
	const tokenUrl = `https://id.twitch.tv/oauth2/token?client_id=${
		process.env.TWITCH_CLIENT_ID as string
	}&client_secret=${process.env.TWITCH_SECRET as string}&grant_type=client_credentials&scope=`

	try {
		const response = await fetch(tokenUrl, {
			method: "POST",
			redirect: "follow"
		})

		const data = await response.json()

		if (data.access_token) {
			return data as IOAuthToken
		} else {
			throw data as IOAuthRejection
		}
	} catch (error) {
		throw error
	}
}

export const headers = async () => ({
	"Client-ID": process.env.TWITCH_CLIENT_ID as string,
	"Authorization": `Bearer ${(await getAuthToken()).access_token}`
})
