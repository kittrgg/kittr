import { Kit, KitOption, prisma } from "@kittr/prisma"

export const upsertKit = async ({
	channelId,
	kit
}: {
	kit: Partial<Kit> & { options?: KitOption[] | null }
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

	const channel = await prisma.kit.upsert({
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
			kits: {
				delete: {
					id: kitId
				}
			}
		}
	})
	return deletedKit
}
