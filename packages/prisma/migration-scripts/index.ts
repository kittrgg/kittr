import { prisma } from "../index"
import { Game as GameType } from "../client"
import mongoose from "mongoose"

import { KitOption } from "../models/KitOption"
import { Game } from "../models/Game"
import { KitBase } from "../models/KitBase"

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

		const createGames = async () => {
			const games = await Game.find({})

			for (const game of games) {
				await prisma.game.create({
					data: {
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
							connectOrCreate: [
								...game.platforms.map((platform) => ({
									where: { displayName: platform },
									create: { displayName: platform }
								}))
							]
						}
					}
				})
			}
		}

		const createKitBases = async () => {
			const bases = await KitBase.find({})

			for (const base of bases) {
				await prisma.kitBase.create({
					data: {
						id: base._id.toString(),
						displayName: base.displayName,
						imageUrl: base.image,
						blurb: base.gameInfo.blurb,
						maxOptions: base.gameInfo.maxOptions,
						game: {
							connect: {
								id: base.gameId.toString()
							}
						},
						commandCodes: {
							create: base.commandCodes.map((code) => ({
								code: code
							}))
						},
						stats: {
							create: Object.entries(base.gameInfo.stats).map((stat) => {
								const [key, value] = stat

								return {
									displayName: key,
									value: String(value)
								}
							})
						}
					}
				})
			}
		}

		const main = async () => {
			await createKitOptions()
			await createGames()
			await createKitBases()
		}

		main()
			.catch((e) => {
				console.error(e)
				process.exit(1)
			})
			.finally(async () => {
				await prisma.$disconnect()
				await mongoose.connection.close()
				console.log("Dun.")
			})
	})
