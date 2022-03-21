import { prisma } from "@kittr/prisma"

/**
 *  SERVER SIDE ONLY!
 *
 * Get the total amount of kits on the platform. */
export const totalKitsQuery = async (): Promise<number> => {
	const result = await prisma.kit.count()

	return result
}
