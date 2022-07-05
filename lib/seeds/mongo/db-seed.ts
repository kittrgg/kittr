import mongoose from "mongoose"

import Game from "./models/Game"
import games from "./games"

import KitBase from "./models/KitBase"
import kitBases from "./kitBases"

import KitOption from "./models/KitOption"
import kitOptions from "./kitOptions"

import KitStat from "./models/KitStat"
import kitStats from "./kitStats"

import Player from "./models/Channel"
import players from "./players"

const MONGODB_URI =
	process.env.DB_CONNECTION_STRING ||
	"mongodb://root:example@localhost:27017/myFirstDatabase"

if (!MONGODB_URI) {
	throw new Error(
		"Please define the DB_CONNECTION_STRING environment variable."
	)
}

const connectToDatabase = async () => {
	return mongoose
		.connect(MONGODB_URI, {
			authSource: "admin"
		})
		.then((mongoose) => {
			return mongoose
		})
}

const main = async () => {
	try {
		await connectToDatabase()
	} catch (err) {
		console.log(
			`
        ❌ We couldn't connect to MongoDB. ❌
        You may not have the database running at the moment.
        Refer to the README to see how to set up your development environment.
      `
		)
		console.log(err)
	}

	try {
		await Game.deleteMany({})
		await Game.insertMany(games)
	} catch (err) {
		return console.error(err)
	}

	try {
		await KitBase.deleteMany({})
		await KitBase.insertMany(kitBases)
	} catch (err) {
		return console.error(err)
	}

	try {
		await KitOption.deleteMany({})
		await KitOption.insertMany(kitOptions)
	} catch (err) {
		return console.error(err)
	}

	try {
		await KitStat.deleteMany({})
		await KitStat.insertMany(kitStats)
	} catch (err) {
		return console.error(err)
	}

	try {
		await Player.deleteMany({})
		await Player.insertMany(players)
	} catch (err) {
		return console.error(err)
	}

	console.log(
		`
      Your local MongoDB instance has been seeded. ✅
      Let's get kittd.
  `
	)
}

main()
	.catch((err) => {
		console.error(err)
	})
	.finally(() => {
		mongoose.connection.close()
		process.exit(0)
	})

