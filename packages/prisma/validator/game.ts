import * as z from "zod"
import { CompleteGenre, RelatedGenreModel, CompletePlatform, RelatedPlatformModel, CompleteKitBase, RelatedKitBaseModel, CompleteChannel, RelatedChannelModel, CompleteChannelAffiliateCode, RelatedChannelAffiliateCodeModel, CompleteChannelCustomGameCommand, RelatedChannelCustomGameCommandModel, CompleteKit, RelatedKitModel, CompleteKitOption, RelatedKitOptionModel } from "./index"

export const GameModel = z.object({
  id: z.string(),
  displayName: z.string(),
  urlSafeName: z.string(),
  backgroundImageUrl: z.string(),
  titleImageUrl: z.string(),
  active: z.boolean(),
  blurDataUrl: z.string(),
  developer: z.string(),
  releaseDate: z.date(),
})

export interface CompleteGame extends z.infer<typeof GameModel> {
  genres: CompleteGenre[]
  platforms: CompletePlatform[]
  kitBases: CompleteKitBase[]
  channels: CompleteChannel[]
  channelAffiliateCodes: CompleteChannelAffiliateCode[]
  customCommandStrings: CompleteChannelCustomGameCommand[]
  kits: CompleteKit[]
  kitOptions: CompleteKitOption[]
}

/**
 * RelatedGameModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedGameModel: z.ZodSchema<CompleteGame> = z.lazy(() => GameModel.extend({
  genres: RelatedGenreModel.array(),
  platforms: RelatedPlatformModel.array(),
  kitBases: RelatedKitBaseModel.array(),
  channels: RelatedChannelModel.array(),
  channelAffiliateCodes: RelatedChannelAffiliateCodeModel.array(),
  customCommandStrings: RelatedChannelCustomGameCommandModel.array(),
  kits: RelatedKitModel.array(),
  kitOptions: RelatedKitOptionModel.array(),
}))
