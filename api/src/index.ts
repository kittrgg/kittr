import { generateKitStats } from "@Jobs/createKitStatsAsInterval"
import { writeViewCounts } from "@Jobs/writeViewCounts"
import * as Sentry from "@sentry/node"
import twitch from "@Services/twitch/extension/routes"
import { getStreamerByTwitchBroadcasterLoginId } from "@Utils/streamer"
import cors from "cors"
import { CronJob } from "cron"
import dotenv from "dotenv"
import express from "express"
import { createServer } from "http"
import moduleAlias from "module-alias"
import mongoose from "mongoose"
import { Server } from "socket.io"
dotenv.config()

// This needs to happen BEFORE any absolute imports
if (process.env.NODE_ENV !== "development") {
	moduleAlias.addAliases({
		"@Jobs": __dirname + "/jobs",
		"@Services": __dirname + "/services",
		"@Types": __dirname + "/types",
		"@Utils": __dirname + "/utils"
	})
}

const app = express()
app.use(cors())
const httpServer = createServer(app)
const io = new Server(httpServer, {
	cors: {
		origin: "*"
	}
})

Sentry.init({
	dsn: process.env.SENTRY_DSN,
	environment: process.env.IS_TESTING ? "testing" : process.env.NODE_ENV
})

app.use(Sentry.Handlers.requestHandler())
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

		// Throw an error to test Sentry
		app.get("/error", (req, res) => {
			throw new Error("Test error")
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

			// Triggers refetches for the Stripe subscription webhook
			// app.post("/stripe-webhook-reporter", (req, res) => {
			// 	const { _id } = req.body
			// 	io.emit(`dashboard=${_id}`, "Trigger refetch!")
			// 	return res.status(200).json({ success: true })
			// })

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

		app.use(Sentry.Handlers.errorHandler())

		httpServer.listen(process.env.PORT || 5000, () =>
			console.log(`Server is running on port: ${process.env.PORT || 5000}...`)
		)
	})
	.catch((err) => {
		console.log("Error connecting to MongoDB:")
		console.error(err)
		Sentry.captureException(err)
	})
