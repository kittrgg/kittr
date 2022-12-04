import * as z from "zod"
import {
	CompleteGame,
	RelatedGameModel,
	CompleteChannel,
	RelatedChannelModel
} from "./index"

export const ChannelCustomGameCommandModel = z.object({
	id: z.string(),
	command: z.string(),
	gameId: z.string(),
	channelId: z.string()
})

export interface CompleteChannelCustomGameCommand
	extends z.infer<typeof ChannelCustomGameCommandModel> {
	game: CompleteGame
	channel: CompleteChannel
}

/**
 * RelatedChannelCustomGameCommandModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedChannelCustomGameCommandModel: z.ZodSchema<CompleteChannelCustomGameCommand> =
	z.lazy(() =>
		ChannelCustomGameCommandModel.extend({
			game: RelatedGameModel,
			channel: RelatedChannelModel
		})
	)
