import {
	CompleteGame,
	RelatedGameModel,
	CompleteWarzoneTwoCommandCode,
	RelatedWarzoneTwoCommandCodeModel,
	CompleteWarzoneTwoKitOption,
	RelatedWarzoneTwoKitOptionModel,
	CompleteWarzoneTwoKitBaseCategory,
	RelatedWarzoneTwoKitBaseCategoryModel,
	CompleteWarzoneTwoKit,
	RelatedWarzoneTwoKitModel
} from "./index"
import * as z from "zod"

export const WarzoneTwoKitBaseModel = z.object({
	id: z.string(),
	displayName: z.string(),
	gameId: z.string(),
	imageUrl: z.string(),
	blurb: z.string(),
	maxOptions: z.number().int(),
	categoryId: z.string()
})

export interface CompleteWarzoneTwoKitBase
	extends z.infer<typeof WarzoneTwoKitBaseModel> {
	game: CompleteGame
	commandCodes: CompleteWarzoneTwoCommandCode[]
	availableOptions: CompleteWarzoneTwoKitOption[]
	category: CompleteWarzoneTwoKitBaseCategory
	kits: CompleteWarzoneTwoKit[]
}

/**
 * RelatedWarzoneTwoKitBaseModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedWarzoneTwoKitBaseModel: z.ZodSchema<CompleteWarzoneTwoKitBase> =
	z.lazy(() =>
		WarzoneTwoKitBaseModel.extend({
			game: RelatedGameModel,
			commandCodes: RelatedWarzoneTwoCommandCodeModel.array(),
			availableOptions: RelatedWarzoneTwoKitOptionModel.array(),
			category: RelatedWarzoneTwoKitBaseCategoryModel,
			kits: RelatedWarzoneTwoKitModel.array()
		})
	)
