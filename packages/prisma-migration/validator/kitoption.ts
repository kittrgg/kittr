import * as z from "zod"
import { CompleteGame, RelatedGameModel, CompleteKitBase, RelatedKitBaseModel, CompleteKit, RelatedKitModel } from "./index"

export const KitOptionModel = z.object({
  id: z.string(),
  gameId: z.string(),
  displayName: z.string(),
  slotKey: z.string(),
  orderPlacement: z.number().int(),
  kitBaseId: z.string(),
})

export interface CompleteKitOption extends z.infer<typeof KitOptionModel> {
  game: CompleteGame
  kitBase: CompleteKitBase
  channelKits: CompleteKit[]
}

/**
 * RelatedKitOptionModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedKitOptionModel: z.ZodSchema<CompleteKitOption> = z.lazy(() => KitOptionModel.extend({
  game: RelatedGameModel,
  kitBase: RelatedKitBaseModel,
  channelKits: RelatedKitModel.array(),
}))
