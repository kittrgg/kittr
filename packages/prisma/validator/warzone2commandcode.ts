import { CompleteWarzone2KitBase, RelatedWarzone2KitBaseModel } from "./index"
import * as z from "zod"

export const Warzone2CommandCodeModel = z.object({
	id: z.string(),
	code: z.string(),
	kitBaseId: z.string()
})

export interface CompleteWarzone2CommandCode
	extends z.infer<typeof Warzone2CommandCodeModel> {
	kitBase: CompleteWarzone2KitBase
}

/**
 * RelatedWarzone2CommandCodeModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedWarzone2CommandCodeModel: z.ZodSchema<CompleteWarzone2CommandCode> =
	z.lazy(() =>
		Warzone2CommandCodeModel.extend({
			kitBase: RelatedWarzone2KitBaseModel
		})
	)
