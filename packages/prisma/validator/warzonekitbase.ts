import * as z from "zod"
import {
	CompleteGame,
	RelatedGameModel,
	CompleteWarzoneCommandCode,
	RelatedWarzoneCommandCodeModel,
	CompleteWarzoneKitOption,
	RelatedWarzoneKitOptionModel,
	CompleteWarzoneKitBaseCategory,
	RelatedWarzoneKitBaseCategoryModel,
	CompleteWarzoneKit,
	RelatedWarzoneKitModel
} from "./index"

export const WarzoneKitBaseModel = z.object({
	id: z.string(),
	displayName: z.string(),
	gameId: z.string(),
	imageUrl: z.string(),
	blurb: z.string(),
	maxOptions: z.number().int(),
	categoryId: z.string()
})

export interface CompleteWarzoneKitBase
	extends z.infer<typeof WarzoneKitBaseModel> {
	game: CompleteGame
	commandCodes: CompleteWarzoneCommandCode[]
	availableOptions: CompleteWarzoneKitOption[]
	category: CompleteWarzoneKitBaseCategory
	kits: CompleteWarzoneKit[]
}

/**
 * RelatedWarzoneKitBaseModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedWarzoneKitBaseModel: z.ZodSchema<CompleteWarzoneKitBase> =
	z.lazy(() =>
		WarzoneKitBaseModel.extend({
			game: RelatedGameModel,
			commandCodes: RelatedWarzoneCommandCodeModel.array(),
			availableOptions: RelatedWarzoneKitOptionModel.array(),
			category: RelatedWarzoneKitBaseCategoryModel,
			kits: RelatedWarzoneKitModel.array()
		})
	)
