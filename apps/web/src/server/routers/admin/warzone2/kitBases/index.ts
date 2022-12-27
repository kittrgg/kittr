/* eslint-disable @typescript-eslint/no-unused-vars */
import { categoriesRouter } from "./kitCategories"
import { optionsRouter } from "./kitOptions"
import { Warzone2AdminController } from "@Server/controllers/admin/warzone2/index"
import { createRouter } from "@Server/createRouter"
import { prisma } from "@kittr/prisma"
import { z } from "zod"

export const warzone2KitBaseRouter = createRouter()
	.merge("options/", optionsRouter)
	.merge("categories/", categoriesRouter)
	.merge("list", Warzone2AdminController.listKitBases)
	.merge("get", Warzone2AdminController.getKitBase)
	.merge("create", Warzone2AdminController.createBase)
	.merge("update", Warzone2AdminController.updateBase)
	.merge("delete", Warzone2AdminController.deleteBase)
	.mutation("copy", {
		input: z.object({
			baseToCopy: z.string()
		}),
		resolve: async ({ input }) => {
			const baseToCopyWithAttachments = await prisma.warzoneTwoKitBase.findFirst({
				where: {
					id: input.baseToCopy
				},
				include: {
					category: true,
					availableOptions: true,
					commandCodes: true
				}
			})

			if (!baseToCopyWithAttachments) return null

			const { id, gameId, availableOptions, displayName, category, commandCodes, ...rest } = baseToCopyWithAttachments

			const result = await prisma.warzoneTwoKitBase.create({
				data: {
					...rest,
					displayName: displayName + " (copy)",
					gameId,
					commandCodes: { create: commandCodes.map((el) => ({ code: el.code })) },
					categoryId: category.id,
					availableOptions: {
						create: availableOptions.map((el) => {
							const { id, kitBaseId, ...rest } = el

							return rest
						})
					}
				}
			})

			return result
		}
	})
