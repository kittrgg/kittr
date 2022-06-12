import * as z from "zod"
import { CompleteChannel, RelatedChannelModel, CompleteGame, RelatedGameModel } from "./index"

export const ChannelAffiliateCodeModel = z.object({
  id: z.string(),
  channelId: z.string(),
  gameId: z.string(),
  code: z.string(),
})

export interface CompleteChannelAffiliateCode extends z.infer<typeof ChannelAffiliateCodeModel> {
  channel: CompleteChannel
  game: CompleteGame
}

/**
 * RelatedChannelAffiliateCodeModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedChannelAffiliateCodeModel: z.ZodSchema<CompleteChannelAffiliateCode> = z.lazy(() => ChannelAffiliateCodeModel.extend({
  channel: RelatedChannelModel,
  game: RelatedGameModel,
}))
