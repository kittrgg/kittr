/* eslint-disable max-len */
import {
	prisma,
	WarzoneTwoKit,
	WarzoneTwoKitOption,
	WarzoneKit,
	WarzoneKitOption,
	WarzoneTwoKitOptionTuning
} from "@kittr/prisma"

export const upsertKit = async ({
	channelId,
	kit,
	gameView
}: {
	kit: Partial<WarzoneKit | WarzoneTwoKit> & { options?: WarzoneKitOption[] | WarzoneTwoKitOption[] | null } & {
		tuning?: (Omit<WarzoneTwoKitOptionTuning, "id"> & { id?: string })[] | null
	}
	channelId: string
	gameView: string
}) => {
	const update = {
		base: {
			connect: {
				id: kit.baseId
			}
		},
		channel: {
			connect: {
				id: channelId
			}
		},
		game: {
			connect: {
				id: kit.gameId
			}
		},
		options: {
			connect: kit?.options?.map((opt) => ({
				id: opt.id
			}))
		},
		blueprint: kit.blueprint,
		featured: kit.featured,
		customTitle: kit.customTitle,
		quote: kit.quote,
		tiktokUrl: kit.tiktokUrl,
		youtubeUrl: kit.youtubeUrl
	}

	// Remove options from kit when updating so upsert can work correctly
	if (kit.id && gameView === "wz2") {
		await prisma.warzoneTwoKit.update({
			where: { id: kit.id ?? "" },
			data: {
				options: {
					set: []
				}
			}
		})
	} else if (kit.id) {
		await prisma.warzoneKit.update({
			where: { id: kit.id ?? "" },
			data: {
				options: {
					set: []
				}
			}
		})
	}

	if (gameView === "wz2") {
		const channel = await prisma.warzoneTwoKit.upsert({
			where: { id: kit.id ?? "" },
			create: {
				...update,
				tuning: {
					connectOrCreate: kit.tuning?.map((tune) => ({
						where: { id: tune.id ?? "" },
						create: { horz: tune.horz, vert: tune.vert, kitOptionId: tune.kitOptionId }
					}))
				}
			},
			update: {
				...update,
				tuning: {
					upsert: kit.tuning?.map((tune) => {
						return {
							where: { id: tune.id ?? "" },
							create: { horz: tune.horz, vert: tune.vert, kitOptionId: tune.kitOptionId },
							update: { horz: tune.horz, vert: tune.vert, kitOptionId: tune.kitOptionId }
						}
					})
				}
			}
		})

		return channel
	}

	// Updates wz1 if gameView is not warzone2
	const channel = await prisma.warzoneKit.upsert({
		where: { id: kit.id ?? "" },
		create: update,
		update
	})

	return channel
}

export const deleteKit = async ({
	kitId,
	channelId,
	gameView
}: {
	kitId: string
	channelId: string
	gameView: string
}) => {
	if (gameView === "wz2") {
		const deletedKit = await prisma.channel.update({
			where: { id: channelId },
			data: {
				warzoneTwoKits: {
					delete: {
						id: kitId
					}
				}
			}
		})
		return deletedKit
	}

	const deletedKit = await prisma.channel.update({
		where: { id: channelId },
		data: {
			warzoneKits: {
				delete: {
					id: kitId
				}
			}
		}
	})
	return deletedKit
}
