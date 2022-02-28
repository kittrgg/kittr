import axios from "axios"

const config = {} as any

/*
Twitch will provide the extension secret, base64 encoded
So we must base64 decode it before we can use it.
*/
config.secret = Buffer.from(process.env.TWITCH_EXTENSION_SECRET || "", "base64")

/*
Lets generate an App Access Token
This generates one token, which will be valid for around 60 days

For now, this will need to be refreshed manually
*/
const params = new URLSearchParams()
params.append("client_id", process.env.TWITCH_CLIENT_ID as string)
params.append("client_secret", process.env.TWITCH_SECRET as string)
params.append("grant_type", "client_credentials")

axios({
	method: "post",
	url: "https://id.twitch.tv/oauth2/token",
	data: params
})
	.then((resp: any) => {
		if (resp.data.access_token) {
			config.api_token = resp.data.access_token
			console.log("Set an App Access Token:", config.api_token)
		} else {
			console.error("The Twitch extension WON'T WORK")
			console.error("No access_token:", resp.data)
		}
	})
	.catch((err: any) => {
		if (err.response) {
			console.error("Error at token generation", err.response.statusCode, err.response.body)
			console.error("Error at token generation", err)
		} else {
			console.error("Error at token generation", err)
		}
	})

export default config
