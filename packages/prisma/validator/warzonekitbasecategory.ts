import { CompleteWarzoneKitBase, RelatedWarzoneKitBaseModel } from "./index"
import * as z from "zod"

export const WarzoneKitBaseCategoryModel = z.object({
	id: z.string(),
	displayName: z.string()
})

export interface CompleteWarzoneKitBaseCategory
	extends z.infer<typeof WarzoneKitBaseCategoryModel> {
	kit: CompleteWarzoneKitBase[]
}

/**
 * RelatedWarzoneKitBaseCategoryModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedWarzoneKitBaseCategoryModel: z.ZodSchema<CompleteWarzoneKitBaseCategory> =
	z.lazy(() =>
		WarzoneKitBaseCategoryModel.extend({
			kit: RelatedWarzoneKitBaseModel.array()
		})
	)
