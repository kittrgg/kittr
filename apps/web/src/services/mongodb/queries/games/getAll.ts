import { prisma } from "@kittr/prisma"
import { GameWithGenresAndPlatforms } from "@Types/prisma"

interface SerializedGame extends Omit<GameWithGenresAndPlatforms, "releaseDate"> {
	releaseDate: string
}

/**
 * SERVER SIDE ONLY!
 *
 * Get all the games on the platform. */
export const allGamesQuery = async ({
	serialized
}: {
	serialized?: boolean
}): Promise<GameWithGenresAndPlatforms[] | SerializedGame[]> => {
	const games = await prisma.game.findMany({
		include: {
			platforms: true,
			genres: true
		}
	})

	if (serialized) {
		const serializedQuery: SerializedGame[] = games.map((game) => {
			return {
				...game,
				releaseDate: game.releaseDate.toISOString()
			}
		})

		return serializedQuery
	}

	return games
}
