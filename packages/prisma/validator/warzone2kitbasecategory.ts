import { CompleteWarzone2KitBase, RelatedWarzone2KitBaseModel } from "./index"
import * as z from "zod"

export const Warzone2KitBaseCategoryModel = z.object({
	id: z.string(),
	displayName: z.string()
})

export interface CompleteWarzone2KitBaseCategory
	extends z.infer<typeof Warzone2KitBaseCategoryModel> {
	kit: CompleteWarzone2KitBase[]
}

/**
 * RelatedWarzone2KitBaseCategoryModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedWarzone2KitBaseCategoryModel: z.ZodSchema<CompleteWarzone2KitBaseCategory> =
	z.lazy(() =>
		Warzone2KitBaseCategoryModel.extend({
			kit: RelatedWarzone2KitBaseModel.array()
		})
	)
