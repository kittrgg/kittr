import { prisma, Prisma } from "@kittr/prisma"

export const listBases = async <T extends Prisma.WarzoneKitBaseInclude>(include: T) => {
	const bases = await prisma.warzoneKitBase.findMany({ include })
	const wz2Bases = await prisma.warzone2KitBase.findMany({ include })
	// TODO: This needs to be fixed when more games are added.
	if (!wz2Bases[0]) return bases
	return wz2Bases
}

export const listGameBases = async (gameId: string, urlSafeName?: string) => {
	const bases = await prisma.warzoneKitBase.findMany({
		where: {
			gameId
		}
	})
	const wz2Bases = await prisma.warzone2KitBase.findMany({
		where: {
			gameId
		}
	})
	// TODO: This needs to be fixed when more games are added.
	if (!wz2Bases[0]) return bases
	return wz2Bases
}

