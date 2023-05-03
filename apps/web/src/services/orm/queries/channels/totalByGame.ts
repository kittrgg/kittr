import type { Prisma} from "@kittr/prisma";
import { prisma } from "@kittr/prisma"

/**
	 * @params
	 * gameId: ObjectId of the game
	 *
	 * @returns
	 * Promise containing number
	 *
	 */
type ChannelsByGameQuery = (gameId: string) => Promise<number | undefined>

/**
 * SERVER SIDE ONLY!
 *
 * Get the total channels for a game.
 */
export const getTotalChannelsByGameQuery: ChannelsByGameQuery = async (gameId) => {
	const result = await prisma.channel.count({
		where: {
			games: {
				some: {
					id: gameId
				}
			}
		}
	})

	if (result === 0) return undefined

	return result
}

export type getTotalChannelsByGameQueryReturnType = Prisma.PromiseReturnType<typeof getTotalChannelsByGameQuery>
