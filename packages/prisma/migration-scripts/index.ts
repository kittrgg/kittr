import { prisma } from "../index"
import mongoose from "mongoose"

import { KitOption } from "../models/KitOption"
import { Game } from "../models/Game"
import { KitBase } from "../models/KitBase"
import { Channel } from "../models/Channel"

mongoose
	.connect(process.env.MONGOOSE_CONNECTION_STRING as string, {
		authSource: "admin"
	})
	.then(async () => {
		console.log("Connected to MongoDB")
		// Pick up all the data that I will be needing once
		const games = await Game.find({}).lean()
		const bases = await KitBase.find({}).lean()
		const options = await KitOption.find({}).lean()
		const channels = await Channel.find({}).lean()

		const createGames = async () => {
			console.time("Creating games")
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
						},
						genres: {
							connectOrCreate: [
								...game.genres.map((genre) => ({
									where: { displayName: genre },
									create: { displayName: genre }
								}))
							]
						}
					}
				})
			}
			console.timeEnd("Creating games")
		}

		const createKitBases = async () => {
			console.time("Creating kit bases")
			const formattedBases = bases.map((base) => ({
				...base,
				gameInfo: {
					...base.gameInfo,
					availableOptions: base.gameInfo.availableOptions.map((option) => {
						const foundOption = options.find((o) => {
							return o._id.toString() === option.optionId.toString()
						})

						return {
							orderPlacement: Number(option.orderPlacement) * 10,
							gameId: (foundOption as any).gameId,
							displayName: (foundOption as any).displayName,
							slotKey: (foundOption as any).slotKey
						}
					})
				}
			}))

			for (const base of formattedBases) {
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
						},
						availableOptions: {
							create: base.gameInfo.availableOptions
						},
						category: {
							connectOrCreate: {
								where: { displayName: base.category },
								create: { displayName: base.category }
							}
						}
					}
				})
			}
			console.timeEnd("Creating kit bases")
		}

		const createChannels = async () => {
			console.time("Creating channels")
			const formattedChannels = channels.map((channel) => ({
				id: channel._id.toString(),
				createdAt: channel._id.getTimestamp(),
				displayName: channel.displayName,
				urlSafeName: channel.urlSafeName,
				viewCount: channel.viewCount,
				previousUpdater: channel.previousUpdater,
				games: channel.games
			}))

			for (const channel of formattedChannels) {
				await prisma.channel.create({
					data: {
						...channel,
						games: {
							connect: channel.games.map((game) => ({ id: game.id.toString() }))
						},
						gameAffiliateCodes: {
							create: channel.games
								.filter((game) => !!game.code)
								.map((game) => {
									return {
										gameId: game.id.toString(),
										code: game.code!
									}
								})
						},
						customGameCommands: {
							create: channel.games
								.filter((game) => !!game.commandString)
								.map((game) => {
									return {
										game: { connect: { id: game.id.toString() } },
										command: game.commandString!
									}
								})
						}
					}
				})
			}
			console.timeEnd("Creating channels")
		}

		const main = async () => {
			await createGames()
			await createKitBases()
			await createChannels()
		}

		main()
			.catch((e) => {
				console.error(e)
				process.exit(1)
			})
			.finally(async () => {
				await prisma.$disconnect()
				await mongoose.connection.close()
				console.log(
					"Dun. You are a good person and I hope that you achieved your goal for this run."
				)
			})
	})
