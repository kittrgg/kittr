import dotenv from "dotenv"
dotenv.config()

// This needs to happen BEFORE any absolute imports
import moduleAlias from "module-alias"

if (process.env.NODE_ENV !== "development") {
	moduleAlias.addAliases({
		"@Jobs": __dirname + "/jobs",
		"@Services": __dirname + "/services",
		"@Types": __dirname + "/types",
		"@Utils": __dirname + "/utils"
	})
}

import { generateKitStats } from "@Jobs/createKitStatsAsInterval"
import { writeViewCounts } from "@Jobs/writeViewCounts"
import twitch from "@Services/twitch/extension/routes"
import { getStreamerByTwitchBroadcasterLoginId } from "@Utils/streamer"
import cors from "cors"
import express from "express"
import { createServer } from "http"
import mongoose from "mongoose"
import Rollbar from "rollbar"
import { Server } from "socket.io"
import { CronJob } from "cron"

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
	environment: process.env.NODE_ENV,
	captureUncaught: true,
	captureUnhandledRejections: true
})

if (process.env.NODE_ENV === "production") {
	app.use(rollbar.errorHandler())
}
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use("/twitch", twitch)

console.log(`Connecting to MongoDB...`)
mongoose
	.connect(process.env.DB_CONNECTION_STRING as string, {
		authSource: "admin"
	})
	.then(async () => {
		console.log("Server has started.")

		// Just a pinger!
		app.get("/", (req, res) => {
			res.send("Hello kittr!")
		})

		/*
      /api/streamer?broadcasterLogin={broadcasterLogin}

      Returns the streamer object
    */
		app.get("/api/streamer", getStreamerByTwitchBroadcasterLoginId)

		if (process.env.NODE_ENV === "production") {
			let viewCounts = new CronJob(
				// Hourly
				"0 * * * *",
				() => {
					try {
						writeViewCounts()
					} catch (error) {
						console.error(error)
					}
				},
				null,
				true,
				"America/Los_Angeles"
			)
			viewCounts.start()
		}

		// Every night at 3 AM
		let kitStats = new CronJob("0 3 * * *", () => generateKitStats(), null, true, "America/Los_Angeles")
		kitStats.start()

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

		httpServer.listen(process.env.PORT || 5000, () =>
			console.log(`Server is running on PORT: ${process.env.PORT || 5000}...`)
		)
	})
	.catch((err) => {
		console.log("Error connecting to MongoDB:")
		console.error(err)
	})
