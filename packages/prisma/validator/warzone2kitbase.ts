import * as z from "zod"
import {
	CompleteGame,
	RelatedGameModel,
	CompleteWarzone2CommandCode,
	RelatedWarzone2CommandCodeModel,
	CompleteWarzone2KitOption,
	RelatedWarzone2KitOptionModel,
	CompleteWarzone2KitBaseCategory,
	RelatedWarzone2KitBaseCategoryModel,
	CompleteWarzone2Kit,
	RelatedWarzone2KitModel
} from "./index"

export const Warzone2KitBaseModel = z.object({
	id: z.string(),
	displayName: z.string(),
	gameId: z.string(),
	imageUrl: z.string(),
	blurb: z.string(),
	maxOptions: z.number().int(),
	categoryId: z.string()
})

export interface CompleteWarzone2KitBase
	extends z.infer<typeof Warzone2KitBaseModel> {
	game: CompleteGame
	commandCodes: CompleteWarzone2CommandCode[]
	availableOptions: CompleteWarzone2KitOption[]
	category: CompleteWarzone2KitBaseCategory
	kits: CompleteWarzone2Kit[]
}

/**
 * RelatedWarzone2KitBaseModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedWarzone2KitBaseModel: z.ZodSchema<CompleteWarzone2KitBase> =
	z.lazy(() =>
		Warzone2KitBaseModel.extend({
			game: RelatedGameModel,
			commandCodes: RelatedWarzone2CommandCodeModel.array(),
			availableOptions: RelatedWarzone2KitOptionModel.array(),
			category: RelatedWarzone2KitBaseCategoryModel,
			kits: RelatedWarzone2KitModel.array()
		})
	)
