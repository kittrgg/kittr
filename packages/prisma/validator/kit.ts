import * as z from "zod"
import {
	CompleteKitOption,
	RelatedKitOptionModel,
	CompleteGame,
	RelatedGameModel,
	CompleteKitBase,
	RelatedKitBaseModel,
	CompleteChannel,
	RelatedChannelModel,
	CompleteChannelKitOverlay,
	RelatedChannelKitOverlayModel
} from "./index"

export const KitModel = z.object({
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

export interface CompleteKit extends z.infer<typeof KitModel> {
	options: CompleteKitOption[]
	game: CompleteGame
	base: CompleteKitBase
	channel: CompleteChannel
	channelKitOverlayPrimary?: CompleteChannelKitOverlay | null
	channelKitOverlaySecondary?: CompleteChannelKitOverlay | null
}

/**
 * RelatedKitModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedKitModel: z.ZodSchema<CompleteKit> = z.lazy(() =>
	KitModel.extend({
		options: RelatedKitOptionModel.array(),
		game: RelatedGameModel,
		base: RelatedKitBaseModel,
		channel: RelatedChannelModel,
		channelKitOverlayPrimary: RelatedChannelKitOverlayModel.nullish(),
		channelKitOverlaySecondary: RelatedChannelKitOverlayModel.nullish()
	})
)
