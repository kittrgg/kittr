import axios from "axios"
import express from "express"
import jwt from "jsonwebtoken"
import config from "./accessTokenGenerator"
const router = express.Router()

/*
    Bind a JWT parsing function.
		If this server only does extension traffic, then all good to global.
*/
router.use("/:route?", (req: any, res, next) => {
	if (req.headers["authorization"]) {
		const [type, auth] = req.headers["authorization"].split(" ")

		if (type == "Bearer") {
			jwt.verify(auth, config.secret, (err: any, decoded: any) => {
				if (err) {
					console.log("JWT Error", err)

					res.status(401).json({ error: true, message: "Invalid authorization" })
					return
				}

				req.extension = decoded

				next()
			})

			return
		}

		res.status(401).json({ error: true, message: "Invalid authorization header" })
	} else {
		res.status(401).json({ error: true, message: "Missing authorization header" })
	}
})

router
	.route("/")
	.get((req, res) => {
		res.status(404).json({ error: true, message: "GET Not supported" })
	})
	.post((req: any, res) => {
		if (req.extension.channel_id) {
			console.log("Looking up", req.extension.channel_id)

			axios({
				method: "get",
				url: `https://api.twitch.tv/helix/users?id=${req.extension.channel_id}`,
				headers: {
					"Content-Type": "application/json",
					"client-id": process.env.TWITCH_CLIENT_ID,
					"authorization": "Bearer " + config.api_token
				} as any
			})
				.then((resp: any) => {
					// monitor our rate limit
					// console.log(
					//   "TwitchAPI Rate:",
					//   resp.headers["ratelimit-remaining"],
					//   "/",
					//   resp.headers["ratelimit-limit"]
					// );
					if (resp.data) {
						// only return the single channel
						// no need to dump an array to the front end
						console.log(resp.data.data)
						res.json({
							error: false,
							data: {
								...resp.data.data[0],
								broadcaster_login: resp.data.data[0].login
							}
						})
					} else {
						res.status(404).json({ error: true, message: "Channel not found", resp })
					}
				})
				.catch((err: any) => {
					if (err.response.statusCode) {
						console.error("Twitch API streams Failed", err.response.statusCode, err.response.body)
					} else {
						console.error("Error", err)
					}
					res.status(500).json({ error: true, message: "Twitch API failed" })
				})
		} else {
			res.status(401).json({ error: true, message: "Not Logged into Extension" })
		}
	})

export default router
