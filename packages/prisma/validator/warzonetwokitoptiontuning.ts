import * as z from "zod"
import { CompleteWarzoneTwoKit, RelatedWarzoneTwoKitModel, CompleteWarzoneTwoKitOption, RelatedWarzoneTwoKitOptionModel } from "./index"

export const WarzoneTwoKitOptionTuningModel = z.object({
  id: z.string(),
  kitId: z.string(),
  kitOptionId: z.string(),
  horz: z.number(),
  vert: z.number(),
})

export interface CompleteWarzoneTwoKitOptionTuning extends z.infer<typeof WarzoneTwoKitOptionTuningModel> {
  kit: CompleteWarzoneTwoKit
  kitOption: CompleteWarzoneTwoKitOption
}

/**
 * RelatedWarzoneTwoKitOptionTuningModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedWarzoneTwoKitOptionTuningModel: z.ZodSchema<CompleteWarzoneTwoKitOptionTuning> = z.lazy(() => WarzoneTwoKitOptionTuningModel.extend({
  kit: RelatedWarzoneTwoKitModel,
  kitOption: RelatedWarzoneTwoKitOptionModel,
}))
