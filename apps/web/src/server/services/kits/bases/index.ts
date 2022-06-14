import { prisma, Prisma } from "@kittr/prisma"

export const listBases = async <T extends Prisma.KitBaseInclude>(include: T) => {
	const bases = await prisma.kitBase.findMany({ include })
	return bases
}
