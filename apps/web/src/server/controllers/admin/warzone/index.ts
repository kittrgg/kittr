import { createController } from "@Server/createController"
import * as AdminWarzoneService from "@Server/services/admin/warzone"

const listKitBases = createController()
	// .middleware(authenticateAdmin)
	.query("", {
		async resolve() {
			const result = await AdminWarzoneService.listKitBases()

			return result
		}
	})

// export const updateKit = createController()
// 	.middleware(authenticateAdmin)
// 	.mutation("", {
// 		input: z.object({
// 			base: WarzoneKitBaseModel,
// 			options: z.array(WarzoneKitOptionModel),
// 			commandCodes: z.array(z.string()),
// 			category: z.string()
// 		}),
// 		async resolve({ ctx, input }) {
// 			const updatedBase = await AdminWarzoneService.updateKitBase(input)

// 			return updatedBase
// 		}
// 	})

// kitbase
// options
// command codes
// category

export const WarzoneAdminController = {
	listKitBases
}
