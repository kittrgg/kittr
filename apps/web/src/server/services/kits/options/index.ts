import { prisma } from "@kittr/prisma"

export const list = async () => {
	const result = await prisma.warzoneKitOption.findMany()

	return result
}
