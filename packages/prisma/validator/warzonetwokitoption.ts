import * as z from "zod"
import { CompleteWarzoneTwoKit, RelatedWarzoneTwoKitModel, CompleteWarzoneTwoKitBase, RelatedWarzoneTwoKitBaseModel } from "./index"

export const WarzoneTwoKitOptionModel = z.object({
  id: z.string(),
  gameId: z.string(),
  displayName: z.string(),
  tuneHorz: z.number().nullish(),
  tuneVert: z.number().nullish(),
  slotKey: z.string(),
  orderPlacement: z.number().int(),
  kitBaseId: z.string(),
})

export interface CompleteWarzoneTwoKitOption extends z.infer<typeof WarzoneTwoKitOptionModel> {
  kits: CompleteWarzoneTwoKit[]
  kitBase: CompleteWarzoneTwoKitBase
}

/**
 * RelatedWarzoneTwoKitOptionModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedWarzoneTwoKitOptionModel: z.ZodSchema<CompleteWarzoneTwoKitOption> = z.lazy(() => WarzoneTwoKitOptionModel.extend({
  kits: RelatedWarzoneTwoKitModel.array(),
  kitBase: RelatedWarzoneTwoKitBaseModel,
}))
