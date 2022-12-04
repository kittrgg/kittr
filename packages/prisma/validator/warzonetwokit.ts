import * as z from "zod"
import {
	CompleteWarzoneTwoKitOption,
	RelatedWarzoneTwoKitOptionModel,
	CompleteGame,
	RelatedGameModel,
	CompleteWarzoneTwoKitBase,
	RelatedWarzoneTwoKitBaseModel,
	CompleteChannel,
	RelatedChannelModel,
	CompleteChannelKitOverlay,
	RelatedChannelKitOverlayModel
} from "./index"

export const WarzoneTwoKitModel = z.object({
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

export interface CompleteWarzoneTwoKit
	extends z.infer<typeof WarzoneTwoKitModel> {
	options: CompleteWarzoneTwoKitOption[]
	game: CompleteGame
	base: CompleteWarzoneTwoKitBase
	channel: CompleteChannel
	channelKitOverlayPrimary?: CompleteChannelKitOverlay | null
	channelKitOverlaySecondary?: CompleteChannelKitOverlay | null
}

/**
 * RelatedWarzoneTwoKitModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedWarzoneTwoKitModel: z.ZodSchema<CompleteWarzoneTwoKit> =
	z.lazy(() =>
		WarzoneTwoKitModel.extend({
			options: RelatedWarzoneTwoKitOptionModel.array(),
			game: RelatedGameModel,
			base: RelatedWarzoneTwoKitBaseModel,
			channel: RelatedChannelModel,
			channelKitOverlayPrimary: RelatedChannelKitOverlayModel.nullish(),
			channelKitOverlaySecondary: RelatedChannelKitOverlayModel.nullish()
		})
	)
