import { prisma } from "@kittr/prisma"

interface Params {
	urlSafeName: string
}

export const gameByUrlSafeNameQuery = async ({ urlSafeName }: Params) => {
	const game = await prisma.game.findFirst({
		where: {
			urlSafeName
		}
	})

	return game
}
