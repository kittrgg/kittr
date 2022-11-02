import { prisma, Warzone2KitBase, Warzone2KitOption } from "@kittr/prisma"

export const listKitBases = async () => {
	const result = await prisma.warzone2KitBase.findMany({
		include: {
			availableOptions: true
		}
	})

	return result
}

export const getKitBase = async ({ kitBaseId }: { kitBaseId: string }) => {
	const result = await prisma.warzone2KitBase.findFirst({
		where: {
			id: kitBaseId
		},
		include: {
			availableOptions: true
		}
	})

	return result
}

export const listKitBaseCategories = async () => {
	const result = await prisma.warzone2KitBaseCategory.findMany({})

	return result
}

export const createKitBase = async ({
	base,
	commandCodes
}: {
	base: Omit<Warzone2KitBase, "id">
	commandCodes: string[]
}) => {
	const result = await prisma.warzone2KitBase.create({
		data: {
			...base,
			commandCodes: {
				create: commandCodes.map((code) => ({ code }))
			}
		}
	})

	return result
}

export const updateKitBase = async ({
	base
}: // categoryId,
// commandCodes,
//  options
{
	base: Warzone2KitBase
	// categoryId: string,
	// commandCodes: WarzoneCommandCode[]
	// options: WarzoneKitOption[]
}) => {
	const {
		id,
		// categoryId: removeCatId,
		//  gameId: removeGameId,
		...data
	} = base

	const result = await prisma.warzone2KitBase.update({
		where: {
			id
		},
		data: {
			...data
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

export const deleteKitBase = async ({ kitBaseId }: { kitBaseId: string }) => {
	const result = prisma.warzone2KitBase.delete({
		where: {
			id: kitBaseId
		}
	})

	return result
}

export const updateOptionsForBase = async ({ baseId, options }: { baseId: string; options: Warzone2KitOption[] }) => {
	const result = await prisma.warzone2KitBase.update({
		where: {
			id: baseId
		},
		data: {
			availableOptions: {
				connectOrCreate: options.map((opt) => ({
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

export const createOption = async ({ baseId, option }: { baseId: string; option: Omit<Warzone2KitOption, "id"> }) => {
	const { kitBaseId, ...rest } = option

	const result = await prisma.warzone2KitOption.create({
		data: {
			...rest,
			kitBase: {
				connect: {
					id: baseId
				}
			}
		}
	})

	return result
}

export const updateOption = async (option: Warzone2KitOption) => {
	const { id, ...rest } = option

	const result = await prisma.warzone2KitOption.update({
		where: {
			id: option.id
		},
		data: rest
	})

	return result
}

export const deleteOption = async (optionId: string) => {
	const result = await prisma.warzone2KitOption.delete({
		where: {
			id: optionId
		}
	})

	return result
}

