import * as z from "zod"
import { CompleteWarzoneTwoKit, RelatedWarzoneTwoKitModel, CompleteWarzoneTwoKitBase, RelatedWarzoneTwoKitBaseModel, CompleteWarzoneTwoKitOptionTuning, RelatedWarzoneTwoKitOptionTuningModel } from "./index"

export const WarzoneTwoKitOptionModel = z.object({
  id: z.string(),
  gameId: z.string(),
  displayName: z.string(),
  slotKey: z.string(),
  orderPlacement: z.number().int(),
  kitBaseId: z.string(),
})

export interface CompleteWarzoneTwoKitOption extends z.infer<typeof WarzoneTwoKitOptionModel> {
  kits: CompleteWarzoneTwoKit[]
  kitBase: CompleteWarzoneTwoKitBase
  tuning: CompleteWarzoneTwoKitOptionTuning[]
}

/**
 * RelatedWarzoneTwoKitOptionModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedWarzoneTwoKitOptionModel: z.ZodSchema<CompleteWarzoneTwoKitOption> = z.lazy(() => WarzoneTwoKitOptionModel.extend({
  kits: RelatedWarzoneTwoKitModel.array(),
  kitBase: RelatedWarzoneTwoKitBaseModel,
  tuning: RelatedWarzoneTwoKitOptionTuningModel.array(),
}))
