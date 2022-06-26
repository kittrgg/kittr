import { createController } from "@Server/createController"
import * as AdminWarzoneService from "@Server/services/admin/warzone"
import { WarzoneCommandCodeModel, WarzoneKitBaseModel, WarzoneKitOptionModel } from '@kittr/prisma/validator'
import { z } from 'zod'

const listKitBases = createController()
	// .middleware(authenticateAdmin)
	.query("", {
		async resolve() {
			const result = await AdminWarzoneService.listKitBases()

			return result
		}
	})

export const updateKit = createController()
	// .middleware(authenticateAdmin)
	.mutation("", {
		input: z.object({
			base: WarzoneKitBaseModel,
			// commandCodes: z.array(WarzoneCommandCodeModel),
			// categoryId: z.string(),
			// options: z.array(WarzoneKitOptionModel)
		}),
		async resolve({ input }) {
			const updatedBase = await AdminWarzoneService.updateKitBase({
				base: input.base,
				// categoryId: input.categoryId,
				// commandCodes: input.commandCodes,
				// options: input.options
			})


			return updatedBase
		}
	})

export const updateOptionsForBase = createController()
	// .middleware(authenticateAdmin)
	.mutation("", {
		input: z.object({
			baseId: z.string(),
			options: z.array(WarzoneKitOptionModel)
		}),
		async resolve({ input }) {
			const updatedBase = await AdminWarzoneService.updateOptionsForBase({
				baseId: input.baseId,
				options: input.options
			})

			return updatedBase
		}
	},

	)

export const WarzoneAdminController = {
	listKitBases,
	updateKit,
	updateOptionsForBase
}
