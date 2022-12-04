import * as z from "zod"
import {
	CompleteWarzoneKitOption,
	RelatedWarzoneKitOptionModel,
	CompleteGame,
	RelatedGameModel,
	CompleteWarzoneKitBase,
	RelatedWarzoneKitBaseModel,
	CompleteChannel,
	RelatedChannelModel
} from "./index"

export const WarzoneKitModel = z.object({
	id: z.string(),
	customTitle: z.string().nullish(),
	blueprint: z.string().nullish(),
	featured: z.boolean(),
	youtubeUrl: z.string().nullish(),
	tiktokUrl: z.string().nullish(),
	quote: z.string().nullish(),
	gameId: z.string(),
	baseId: z.string(),
	channelId: z.string()
})

export interface CompleteWarzoneKit extends z.infer<typeof WarzoneKitModel> {
	options: CompleteWarzoneKitOption[]
	game: CompleteGame
	base: CompleteWarzoneKitBase
	channel: CompleteChannel
}

/**
 * RelatedWarzoneKitModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedWarzoneKitModel: z.ZodSchema<CompleteWarzoneKit> = z.lazy(
	() =>
		WarzoneKitModel.extend({
			options: RelatedWarzoneKitOptionModel.array(),
			game: RelatedGameModel,
			base: RelatedWarzoneKitBaseModel,
			channel: RelatedChannelModel
		})
)
