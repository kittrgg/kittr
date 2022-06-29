import { prisma, Prisma } from "@kittr/prisma"

export const listBases = async <T extends Prisma.WarzoneKitBaseInclude>(include: T) => {

	const bases = await prisma.warzoneKitBase.findMany({ include })
	return bases
}
