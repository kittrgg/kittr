import { prisma } from "../index"
import mongoose from "mongoose"

import { KitOption } from "../models/KitOption"
import { Game } from "../models/Game"

mongoose
	.connect(process.env.MONGOOSE_CONNECTION_STRING as string, {
		authSource: "admin"
	})
	.then(async () => {
		console.log("Connected to MongoDB")
		const createKitOptions = async () => {
			const options = await KitOption.find({})

			const formattedOptions = options.map((option) => ({
				id: option._id.toString(),
				gameId: option.gameId,
				displayName: option.displayName,
				slotKey: option.slotKey
			}))

			await prisma.kitOption.createMany({ data: formattedOptions })
		}

		const createPlatforms = async () => {
			const platforms = [
				{ displayName: "PC" },
				{ displayName: "PS" },
				{ displayName: "XBox" }
			]
			await prisma.platform.createMany({ data: platforms })
		}

		const createGames = async () => {
			// For a game, pull out the string values of the platforms it is on
			// Find the platforms in the prisma results
			// Assign them on the outgoing Prisma game object
			const platforms = await prisma.platform.findMany()
			const games = await Game.find({})

			const formattedGames = games.map((game) => ({
				id: game._id.toString(),
				displayName: game.displayName,
				urlSafeName: game.urlSafeName,
				backgroundImageUrl: game.backgroundImage,
				titleImageUrl: game.titleImage,
				active: game.active,
				blurDataUrl: game.blurDataURL,
				developer: game.developer,
				releaseDate: game.releaseDate,
				platforms: {
					create: [{ displayName: "PC" }]
					// create: game.platforms.map((platform) => {
					// 	if (platform === "PC") return { displayName: "PC" }
					// 	if (platform.startsWith("PS")) return { displayName: "PS" }
					// 	if (platform.startsWith("X")) return { displayName: "XBox" }
					// })
				}
			}))

			await prisma.game.createMany({ data: formattedGames })
		}

		const main = async () => {
			await createKitOptions()
			await createPlatforms()
			await createGames()
		}

		main()
			.catch((e) => {
				console.error(e)
				process.exit(1)
			})
			.finally(async () => {
				await prisma.$disconnect()
			})

		// mongoose.connection.close()
	})
