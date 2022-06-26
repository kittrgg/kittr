import { prisma } from "@kittr/prisma"

export const listKitBases = async () => {
	const result = await prisma.warzoneKitBase.findMany({
		include: {
			availableOptions: true
		}
	})

	return result
}

export const listKitBaseOptions = async ({ kitBaseId }: { kitBaseId: string }) => {
	const result = await prisma.warzoneKitOption.findMany({
		where: {
			id: kitBaseId
		}
	})

	return result
}
