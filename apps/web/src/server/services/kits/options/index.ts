import { prisma } from "@kittr/prisma"

export const list = async ({ kitBaseId }: { kitBaseId: string }) => {
	const result = await prisma.warzoneKitOption.findMany({
		where: {
			kitBaseId
		}
	})

	return result
}
