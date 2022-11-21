import { Prisma, prisma } from "@kittr/prisma"

interface Params {
	gameId: string
	take: number
	skip: number
}

/**
 * SERVER SIDE ONLY!
 *
 * Get channels for a certain game. Accepts parameters for limiting and skipping.
 */
export const getChannelsByGameQuery = async ({ gameId, take = 10, skip = 0 }: Params) => {
	const result = await prisma.channel.findMany({
		take,
		skip,
		orderBy: {
			viewCount: "desc"
		},
		where: {
			games: {
				some: {
					id: gameId
				}
			}
		},
		include: {
			links: true,
			profile: true
		}
	})

	return result
}

export type getChannelsByGameQueryReturnType = Prisma.PromiseReturnType<typeof getChannelsByGameQuery>
