import * as z from "zod"
import {
	CompleteChannel,
	RelatedChannelModel,
	CompleteGame,
	RelatedGameModel
} from "./index"

export const ChannelCreatorCodeModel = z.object({
	id: z.string(),
	channelId: z.string(),
	gameId: z.string(),
	code: z.string()
})

export interface CompleteChannelCreatorCode
	extends z.infer<typeof ChannelCreatorCodeModel> {
	channel: CompleteChannel
	game: CompleteGame
}

/**
 * RelatedChannelCreatorCodeModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedChannelCreatorCodeModel: z.ZodSchema<CompleteChannelCreatorCode> =
	z.lazy(() =>
		ChannelCreatorCodeModel.extend({
			channel: RelatedChannelModel,
			game: RelatedGameModel
		})
	)
