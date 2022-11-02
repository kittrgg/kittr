/* eslint-disable max-len */
import { prisma, Warzone2Kit, Warzone2KitOption, WarzoneKit, WarzoneKitOption } from "@kittr/prisma"

export const upsertKit = async ({
	channelId,
	kit,
	gameView
}: {
	kit: Partial<WarzoneKit | Warzone2Kit> & { options?: WarzoneKitOption[] | Warzone2KitOption[] | null }
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
	if (kit.id && gameView === "warzone2") {
		await prisma.warzone2Kit.update({
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

	if (gameView === "warzone2") {
		const channel = await prisma.warzone2Kit.upsert({
			where: { id: kit.id ?? "" },
			create: update,
			update: update
		})

		return channel
	}

	// Updates wz1 if gameView is not warzone2
	const channel = await prisma.warzoneKit.upsert({
		where: { id: kit.id ?? "" },
		create: update,
		update: update
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
	if (gameView === "warzone2") {
		const deletedKit = await prisma.channel.update({
			where: { id: channelId },
			data: {
				warzone2Kits: {
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

