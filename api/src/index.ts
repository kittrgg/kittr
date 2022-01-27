import { createKitStatsAsInterval } from "@Jobs/createKitStatsAsInterval"
import { writeViewCounts } from "@Jobs/viewCountAsUseInterval"
import twitch from "@Services/twitch/extension/routes"
import { getStreamerByTwitchBroadcasterLoginId } from "@Utils/streamer"
import cors from "cors"
import "dotenv/config"
import express from "express"
import { createServer } from "http"
import mongoose from "mongoose"
import Rollbar from "rollbar"
import { Server } from "socket.io"

const app = express()
const httpServer = createServer(app)
const io = new Server(httpServer, {
	cors: {
		origin: "*"
	}
})

app.use(
	cors({
		origin: "*",
		credentials: true
	})
)

const rollbar = new Rollbar({
	accessToken: process.env.ROLLBAR_ACCESS_TOKEN,
	environment: process.env.ENVIRONMENT,
	captureUncaught: true,
	captureUnhandledRejections: true
})

if (process.env.ENVIRONMENT === "PRODUCTION") {
	app.use(rollbar.errorHandler())
}
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use("/twitch", twitch)

mongoose
	.connect(process.env.DB_CONNECTION_STRING as string, {
		authSource: "admin",
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useFindAndModify: false
	})
	.then(async () => {
		console.log("Server has started.")

		// Just a pinger!
		app.get("/", (req, res) => {
			res.send("Hello, kittr!")
		})

		/*
      /api/streamer?broadcasterLogin={broadcasterLogin}

      Returns the streamer object
    */
		app.get("/api/streamer", getStreamerByTwitchBroadcasterLoginId)

		if (process.env.ENVIRONMENT === "PRODUCTION") {
			setInterval(() => writeViewCounts(), 3600000) // Once an hour
		}
		setInterval(() => createKitStatsAsInterval(), 86700000) // A little more than once a day

		let openSockets = 0

		io.on("connection", async (socket) => {
			console.log(`Socket connected from IP: ${socket.handshake.address}`)
			openSockets = openSockets + 1
			console.log("Active Socket Count:", openSockets)

			// Triggers refetches for both the dashboard and overlay
			socket.on(`dashboardChangeReporter`, (_id: string) => {
				io.emit(`dashboard=${_id}`, "Trigger refetch!")
			})

			socket.on("channelDelete", (_id: string) => {
				io.emit(`channelDelete=${_id}`, _id)
			})

			socket.on("gameDelete", (_id: string) => {
				io.emit(`gameDelete=${_id}`, "Trigger refetch!")
			})

			socket.on("disconnect", () => {
				console.log(`Socket disconnected from IP: ${socket.handshake.address}`)
				openSockets = openSockets - 1
				console.log("Active Socket Count:", openSockets)
			})
		})

		app.listen(process.env.PORT || 5000, () => console.log(`Server is running on PORT: ${process.env.PORT || 5000}...`))
	})
	.catch((err) => console.error(err))
