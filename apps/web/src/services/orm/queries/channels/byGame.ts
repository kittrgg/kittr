import { prisma, Channel } from "@kittr/prisma"

interface Params {
	gameId: string
	limit: number
	skip: number
}

/**
 * SERVER SIDE ONLY!
 *
 * Get channels for a certain game. Accepts parameters for limiting and skipping.
 */
export const channelsByGameQuery = async ({ gameId, limit, skip = 0 }: Params): Promise<Channel[]> => {
	const result = await prisma.channel.findMany({
		orderBy: {
			viewCount: "desc"
		},
		where: {
			games: {
				some: {
					id: gameId
				}
			}
		}
	})

	return result
}
