import { prisma } from "@kittr/prisma"

export const addGame = async ({ channelId, gameId }: { channelId: string; gameId: string }) => {
	const channel = await prisma.channel.update({
		where: { id: channelId },
		data: {
			games: {
				connect: {
					id: gameId
				}
			}
		}
	})

	return channel
}

export const deleteGame = async ({ channelId, gameId }: { channelId: string; gameId: string }) => {
	const channel = await prisma.channel.update({
		where: { id: channelId },
		data: {
			games: {
				disconnect: {
					id: gameId
				}
			}
		}
	})

	return channel
}
