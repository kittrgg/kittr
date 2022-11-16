import { prisma, WarzoneTwoKitBase, WarzoneTwoKitOption } from "@kittr/prisma"

export const listKitBases = async () => {
	const result = await prisma.warzoneTwoKitBase.findMany({
		include: {
			availableOptions: true
		}
	})

	return result
}

export const getKitBase = async ({ kitBaseId }: { kitBaseId: string }) => {
	const result = await prisma.warzoneTwoKitBase.findFirst({
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
	const result = await prisma.warzoneTwoKitBaseCategory.findMany({})

	return result
}

export const createKitBase = async ({
	base,
	commandCodes
}: {
	base: Omit<WarzoneTwoKitBase, "id">
	commandCodes: string[]
}) => {
	const result = await prisma.warzoneTwoKitBase.create({
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
		base: WarzoneTwoKitBase
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

	const result = await prisma.warzoneTwoKitBase.update({
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
	const result = prisma.warzoneTwoKitBase.delete({
		where: {
			id: kitBaseId
		}
	})

	return result
}

export const updateOptionsForBase = async ({ baseId, options }: { baseId: string; options: WarzoneTwoKitOption[] }) => {
	const result = await prisma.warzoneTwoKitBase.update({
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

export const createOption = async ({ baseId, option }: { baseId: string; option: Omit<WarzoneTwoKitOption, "id"> }) => {
	const { kitBaseId, ...rest } = option

	const result = await prisma.warzoneTwoKitOption.create({
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

export const updateOption = async (option: WarzoneTwoKitOption) => {
	const { id, ...rest } = option

	const result = await prisma.warzoneTwoKitOption.update({
		where: {
			id: option.id
		},
		data: rest
	})

	return result
}

export const deleteOption = async (optionId: string) => {
	const result = await prisma.warzoneTwoKitOption.delete({
		where: {
			id: optionId
		}
	})

	return result
}
