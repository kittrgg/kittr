import { prisma, WarzoneCommandCode, WarzoneKitBase, WarzoneKitOption } from "@kittr/prisma"

export const listKitBases = async () => {
	const result = await prisma.warzoneKitBase.findMany({
		include: {
			availableOptions: true
		}
	})

	return result
}

export const updateKitBase = async ({ base,
	// categoryId,
	// commandCodes,
	//  options
}:
	{
		base: WarzoneKitBase,
		// categoryId: string,
		// commandCodes: WarzoneCommandCode[]
		// options: WarzoneKitOption[]
	}) => {
	const {
		id,
		// categoryId: removeCatId,
		//  gameId: removeGameId,
		...data } = base

	const result = await prisma.warzoneKitBase.update({
		where: {
			id
		},
		data: {
			...data,
			// category: {
			// 	connect: {
			// 		id: categoryId
			// 	}
			// },
			// commandCodes: {
			// 	connectOrCreate: commandCodes.map(code => ({ create: code, where: code }))
			// },
			// availableOptions: {
			// 	connectOrCreate: options.map(option => ({ create: option, where: option }))
			// },
		}
	})

	return result
}

export const updateOptionsForBase = async ({ baseId, options }: { baseId: string, options: WarzoneKitOption[] }) => {
	const result = await prisma.warzoneKitBase.update({
		where: {
			id: baseId
		},
		data: {
			availableOptions: {
				connectOrCreate: options.map(opt => ({
					where: {
						id: opt.id
					},
					create: opt
				}))
			}
		}
	})

	return result
}
