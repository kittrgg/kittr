import { prisma, WarzoneKit, WarzoneKitOption } from "@kittr/prisma"

export const upsertKit = async ({
	channelId,
	kit
}: {
	kit: Partial<WarzoneKit> & { options?: WarzoneKitOption[] | null }
	channelId: string
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
	if (kit.id) {
		await prisma.warzoneKit.update({
			where: { id: kit.id ?? "" },
			data: {
				options: {
					set: []
				}
			}
		})
	}

	const channel = await prisma.warzoneKit.upsert({
		where: { id: kit.id ?? "" },
		create: update,
		update: update
	})

	return channel
}

export const deleteKit = async ({ kitId, channelId }: { kitId: string; channelId: string }) => {
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
