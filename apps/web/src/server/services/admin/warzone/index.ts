import { prisma, Prisma, WarzoneKitBase, WarzoneKitOption } from "@kittr/prisma"

export const listKitBases = async () => {
	const result = await prisma.warzoneKitBase.findMany({})

	return result
}

export const updateKitBase = async ({ base, options, commandCodes, category }:
	{
		category: string,
		base: WarzoneKitBase,
		options: WarzoneKitOption,
		commandCodes: string[]
	}) => {
	// transaction
	// update the base itself
	// update the existing options and create new ones using upsert
	// Delete the ones that got dropped on the floor?

	const result = await prisma.warzoneKitBase.update(data)

}