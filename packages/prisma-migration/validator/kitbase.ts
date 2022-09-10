import * as z from "zod"
import { CompleteGame, RelatedGameModel, CompleteKitStat, RelatedKitStatModel, CompleteCommandCode, RelatedCommandCodeModel, CompleteKitOption, RelatedKitOptionModel, CompleteKitBaseCategory, RelatedKitBaseCategoryModel, CompleteKit, RelatedKitModel } from "./index"

export const KitBaseModel = z.object({
  id: z.string(),
  displayName: z.string(),
  gameId: z.string(),
  imageUrl: z.string(),
  blurb: z.string(),
  maxOptions: z.number().int(),
  categoryId: z.string(),
})

export interface CompleteKitBase extends z.infer<typeof KitBaseModel> {
  game: CompleteGame
  stats: CompleteKitStat[]
  commandCodes: CompleteCommandCode[]
  availableOptions: CompleteKitOption[]
  category: CompleteKitBaseCategory
  kits: CompleteKit[]
}

/**
 * RelatedKitBaseModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedKitBaseModel: z.ZodSchema<CompleteKitBase> = z.lazy(() => KitBaseModel.extend({
  game: RelatedGameModel,
  stats: RelatedKitStatModel.array(),
  commandCodes: RelatedCommandCodeModel.array(),
  availableOptions: RelatedKitOptionModel.array(),
  category: RelatedKitBaseCategoryModel,
  kits: RelatedKitModel.array(),
}))
