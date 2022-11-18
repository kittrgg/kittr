import * as z from "zod"
import {
	CompleteWarzone2Kit,
	RelatedWarzone2KitModel,
	CompleteWarzone2KitBase,
	RelatedWarzone2KitBaseModel
} from "./index"

export const Warzone2KitOptionModel = z.object({
	id: z.string(),
	gameId: z.string(),
	displayName: z.string(),
	slotKey: z.string(),
	orderPlacement: z.number().int(),
	kitBaseId: z.string()
})

export interface CompleteWarzone2KitOption
	extends z.infer<typeof Warzone2KitOptionModel> {
	kits: CompleteWarzone2Kit[]
	kitBase: CompleteWarzone2KitBase
}

/**
 * RelatedWarzone2KitOptionModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedWarzone2KitOptionModel: z.ZodSchema<CompleteWarzone2KitOption> =
	z.lazy(() =>
		Warzone2KitOptionModel.extend({
			kits: RelatedWarzone2KitModel.array(),
			kitBase: RelatedWarzone2KitBaseModel
		})
	)
