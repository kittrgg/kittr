import {
	CompleteWarzone2KitOption,
	RelatedWarzone2KitOptionModel,
	CompleteGame,
	RelatedGameModel,
	CompleteWarzone2KitBase,
	RelatedWarzone2KitBaseModel,
	CompleteChannel,
	RelatedChannelModel,
	CompleteChannelKitOverlay,
	RelatedChannelKitOverlayModel
} from "./index"
import * as z from "zod"

export const Warzone2KitModel = z.object({
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

export interface CompleteWarzone2Kit extends z.infer<typeof Warzone2KitModel> {
	options: CompleteWarzone2KitOption[]
	game: CompleteGame
	base: CompleteWarzone2KitBase
	channel: CompleteChannel
	channelKitOverlayPrimary?: CompleteChannelKitOverlay | null
	channelKitOverlaySecondary?: CompleteChannelKitOverlay | null
}

/**
 * RelatedWarzone2KitModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedWarzone2KitModel: z.ZodSchema<CompleteWarzone2Kit> = z.lazy(
	() =>
		Warzone2KitModel.extend({
			options: RelatedWarzone2KitOptionModel.array(),
			game: RelatedGameModel,
			base: RelatedWarzone2KitBaseModel,
			channel: RelatedChannelModel,
			channelKitOverlayPrimary: RelatedChannelKitOverlayModel.nullish(),
			channelKitOverlaySecondary: RelatedChannelKitOverlayModel.nullish()
		})
)
