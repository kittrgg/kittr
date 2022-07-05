import { Prisma, prisma } from "@kittr/prisma"
const include = Prisma.validator<Prisma.GameInclude>()({ genres: true, platforms: true })

export const getAllGamesQuery = async () => {
	const games = await prisma.game.findMany({
		include
	})

	return games
}

export type getAllGamesQueryReturnType = Prisma.PromiseReturnType<typeof getAllGamesQuery>
