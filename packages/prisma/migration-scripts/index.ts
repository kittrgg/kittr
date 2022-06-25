import {
	ChannelManagerRoles,
	ChannelPlanType,
	LinkProperty
} from "@prisma/client"
import mongoose from "mongoose"
import { prisma } from "../index"
import { Channel } from "../models/Channel"
import { Game } from "../models/Game"
import { KitBase } from "../models/KitBase"
import { KitOption } from "../models/KitOption"

console.time("Script Main")
mongoose
	.connect(process.env.MONGOOSE_CONNECTION_STRING as string, {
		authSource: "admin"
	})
	.then(async () => {
		console.log("Connected to MongoDB")
		// Pick up all the data that I will be needing once
		const mongoGames = await Game.find({}).lean()
		const mongoBases = await KitBase.find({}).lean()
		const mongoOptions = await KitOption.find({}).lean()
		const mongoChannels = await Channel.find({}).lean()

		const createGames = async () => {
			for (const game of mongoGames) {
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
		}

		const createKitBases = async () => {
			const formattedBases = mongoBases.map((base) => ({
				...base,
				id: base._id.toString(),
				gameInfo: {
					...base.gameInfo,
					availableOptions: base.gameInfo.availableOptions
						.map((option) => {
							const foundOption = mongoOptions.find((o) => {
								return o._id.toString() === option.optionId.toString()
							})

							if (!foundOption) {
								return undefined
							}

							return {
								orderPlacement: Number(option.orderPlacement) * 10,
								gameId: (foundOption as any).gameId.toString(),
								displayName: (foundOption as any).displayName,
								slotKey: (foundOption as any).slotKey
							}
						})
						.filter((option) => !!option) as any // Compiler was complaining about returning undefined but...that's not going to happen...because filter...?
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
							create: base.gameInfo.availableOptions as any
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
		}

		const createChannels = async () => {
			const formattedChannels = mongoChannels.map((channel) => ({
				id: channel._id.toString(),
				createdAt: channel._id.getTimestamp(),
				displayName: channel.displayName,
				urlSafeName: channel.urlSafeName,
				viewCount: channel.viewCount,
				previousUpdater: channel.previousUpdater,
				games: channel.games,
				managers: channel.managers.map((manager) => {
					const coerceStringToEnum = (): ChannelManagerRoles => {
						if (manager.role === "Administrator") {
							return "ADMIN"
						}
						if (manager.role === "Editor") {
							return "EDITOR"
						}
						if (manager.role === "Owner") {
							return "OWNER"
						}

						return "EDITOR"
					}

					return {
						...manager,
						role: coerceStringToEnum()
					}
				}),
				hasCoverPhoto: channel.meta.hasCoverPhoto,
				hasProfileImage: channel.meta.hasProfileImage,
				affiliates: channel.meta.affiliates,
				brandColors: channel.meta.brandColors,
				specs: channel.meta.specs,
				stripeId: channel.meta.stripeId,
				premiumType:
					channel.meta.premiumType === "premium" ? "PREMIUM" : "BASIC",
				links: channel.meta.links,
				setupPhotos: channel.meta.setupPhotos,
				youtubeAutoplay: channel.meta.youtubeAutoplay
			}))

			for (const channel of formattedChannels) {
				await prisma.channel.create({
					data: {
						id: channel.id,
						displayName: channel.displayName,
						urlSafeName: channel.urlSafeName,
						viewCount: channel.viewCount,
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
						},
						managers: {
							create: channel.managers.map((manager) => ({
								firebaseId: manager.uid.toString(),
								role: manager.role
							}))
						},
						profile: {
							create: {
								hasCoverPhoto: channel.hasCoverPhoto || false,
								hasProfileImage: channel.displayName === "JoeWo",
								youtubeAutoplay: channel.youtubeAutoplay || false,
								affiliates: {
									create: Object.values(channel.affiliates || {}).map(
										(affiliate: {
											code?: string
											description?: string
											company?: string
											url?: string
										}) => ({
											code: affiliate.code,
											description: affiliate.description,
											company: affiliate.company,
											url: affiliate.url
										})
									)
								},
								channelPcSpecs: {
									create: Object.entries(channel.specs || {}).map((spec) => ({
										partType: spec[0],
										partName: spec[1]
									}))
								},
								setupPhotos: {
									create: Object.entries(channel.setupPhotos || {}).map(
										(photo) => {
											return {
												slot: Number(photo[0]),
												exists: photo[1] as unknown as boolean
											}
										}
									)
								},
								brandColors: {
									create: Object.entries(channel.brandColors || {}).map(
										(entry) => ({
											type: "PRIMARY",
											value: entry[1]
										})
									)
								}
							}
						},
						plan: {
							create: {
								type: channel.premiumType as ChannelPlanType,
								stripeSubscriptionId: channel.stripeId || ""
							}
						},
						links: {
							create: Object.entries(channel.links).map((entry) => ({
								property: entry[0].toUpperCase() as LinkProperty,
								value: entry[1]
							}))
						}
					}
				})
			}
		}

		const createKits = async () => {
			// I need the new options from postgres so I can use their ids
			const newOptions = await prisma.kitOption.findMany({
				include: { kitBase: true }
			})

			// Every kit is for Warzone right now so this is applicable
			const warzoneId = mongoGames
				.find((game) => game.displayName === "Warzone")!
				._id.toString()

			// The kits to map over for our creates
			const allKits = mongoChannels
				.map((channel) =>
					channel.kits.map((kit, index) => ({
						...kit,
						channelId: channel._id.toString(),
						id: kit._id.toString(),
						options: kit.options
							.map((opt) => {
								const optionId = opt._id.toString()
								const info = mongoOptions.find(
									(o) => o._id.toString() === optionId
								)!

								if (!info) {
									return undefined
								}

								const newOptionId = newOptions.find((o) => {
									const displayNameMatch = o.displayName === info.displayName
									const baseIdMatch = kit.baseId === o.kitBase.id

									return displayNameMatch && baseIdMatch
								})

								return newOptionId?.id || undefined
							})
							.filter((opt) => !!opt),
						gameId: warzoneId
					}))
				)
				.flat()

			for (const kit of allKits) {
				try {
					await prisma.kit.create({
						data: {
							id: kit.id,
							customTitle: kit.userData.customTitle,
							blueprint: kit.userData.blueprint,
							featured: kit.userData.featured,
							youtubeUrl: kit.userData.youtubeURL,
							tiktokUrl: kit.userData.tiktokId,
							quote: kit.userData.quote,
							game: {
								connect: { id: warzoneId! }
							},
							base: {
								connect: {
									id: kit.baseId
								}
							},
							channel: {
								connect: {
									id: kit.channelId
								}
							},
							options: {
								connect: kit.options.map((opt) => ({ id: opt }))
							}
						}
					})
				} catch (err) {
					console.log(err)
					console.log({ kitId: kit.id })
					console.log({ channelId: kit.channelId })
				}
			}
		}

		const createOverlays = async () => {
			const channels = mongoChannels.map((channel) => {
				return {
					channelId: channel._id,
					kits: channel.kits,
					overlay: {
						...channel.overlay,
						isOverlayVisible:
							channel.overlay?.isOverlayVisible === "on" ? true : false
					}
				}
			})

			for (const channel of channels) {
				const foundPrimaryKit = channel.kits
					.find(
						(kit) =>
							kit._id.toString() ===
							channel.overlay?.primaryKit?._id?.toString()
					)
					?._id.toString()
				const foundSecondaryKit = channel.kits
					.find(
						(kit) =>
							kit._id.toString() ===
							channel.overlay?.secondaryKit?._id?.toString()
					)
					?._id.toString()

				if (channel.overlay) {
					await prisma.channelKitOverlay.create({
						data: {
							...channel.overlay,
							primaryKit: foundPrimaryKit
								? {
										connect: {
											id: foundPrimaryKit
										}
								  }
								: undefined,
							secondaryKit: foundSecondaryKit
								? {
										connect: {
											id: foundSecondaryKit
										}
								  }
								: undefined,
							channel: {
								connect: {
									id: channel.channelId.toString()
								}
							}
						}
					})
				}
			}
		}

		const main = async () => {
			console.log("Creating games...")
			console.time("Creating games")
			await createGames()
			console.timeEnd("Creating games")

			console.log("Creating kit bases...")
			console.time("Creating kit bases")
			await createKitBases()
			console.timeEnd("Creating kit bases")

			console.log("Creating channels...")
			console.time("Creating channels")
			await createChannels()
			console.timeEnd("Creating channels")

			console.log("Creating kits...")
			console.time("Creating kits")
			await createKits()
			console.timeEnd("Creating kits")

			console.log("Creating overlays...")
			console.time("Creating overlays")
			await createOverlays()
			console.timeEnd("Creating overlays")
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
				console.timeEnd("Script Main")
			})
	})
