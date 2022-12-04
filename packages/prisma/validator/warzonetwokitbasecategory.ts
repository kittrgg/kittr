import * as z from "zod"
import {
	CompleteWarzoneTwoKitBase,
	RelatedWarzoneTwoKitBaseModel
} from "./index"

export const WarzoneTwoKitBaseCategoryModel = z.object({
	id: z.string(),
	displayName: z.string()
})

export interface CompleteWarzoneTwoKitBaseCategory
	extends z.infer<typeof WarzoneTwoKitBaseCategoryModel> {
	kit: CompleteWarzoneTwoKitBase[]
}

/**
 * RelatedWarzoneTwoKitBaseCategoryModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedWarzoneTwoKitBaseCategoryModel: z.ZodSchema<CompleteWarzoneTwoKitBaseCategory> =
	z.lazy(() =>
		WarzoneTwoKitBaseCategoryModel.extend({
			kit: RelatedWarzoneTwoKitBaseModel.array()
		})
	)
