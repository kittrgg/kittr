import * as z from "zod"
import { CompleteGenre, RelatedGenreModel, CompletePlatform, RelatedPlatformModel, CompleteChannel, RelatedChannelModel, CompleteChannelCreatorCode, RelatedChannelCreatorCodeModel, CompleteChannelCustomGameCommand, RelatedChannelCustomGameCommandModel, CompleteWarzoneKitBase, RelatedWarzoneKitBaseModel, CompleteWarzoneKit, RelatedWarzoneKitModel, CompleteWarzone2KitBase, RelatedWarzone2KitBaseModel, CompleteWarzone2Kit, RelatedWarzone2KitModel } from "./index"

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
  channels: CompleteChannel[]
  channelCreatorCodes: CompleteChannelCreatorCode[]
  customCommandStrings: CompleteChannelCustomGameCommand[]
  warzoneKitBases: CompleteWarzoneKitBase[]
  warzoneKits: CompleteWarzoneKit[]
  warzone2KitBases: CompleteWarzone2KitBase[]
  warzone2Kits: CompleteWarzone2Kit[]
}

/**
 * RelatedGameModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedGameModel: z.ZodSchema<CompleteGame> = z.lazy(() => GameModel.extend({
  genres: RelatedGenreModel.array(),
  platforms: RelatedPlatformModel.array(),
  channels: RelatedChannelModel.array(),
  channelCreatorCodes: RelatedChannelCreatorCodeModel.array(),
  customCommandStrings: RelatedChannelCustomGameCommandModel.array(),
  warzoneKitBases: RelatedWarzoneKitBaseModel.array(),
  warzoneKits: RelatedWarzoneKitModel.array(),
  warzone2KitBases: RelatedWarzone2KitBaseModel.array(),
  warzone2Kits: RelatedWarzone2KitModel.array(),
}))
