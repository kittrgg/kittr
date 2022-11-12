import * as z from "zod"
import { CompleteWarzoneTwoKitBase, RelatedWarzoneTwoKitBaseModel } from "./index"

export const WarzoneTwoCommandCodeModel = z.object({
  id: z.string(),
  code: z.string(),
  kitBaseId: z.string(),
})

export interface CompleteWarzoneTwoCommandCode extends z.infer<typeof WarzoneTwoCommandCodeModel> {
  kitBase: CompleteWarzoneTwoKitBase
}

/**
 * RelatedWarzoneTwoCommandCodeModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedWarzoneTwoCommandCodeModel: z.ZodSchema<CompleteWarzoneTwoCommandCode> = z.lazy(() => WarzoneTwoCommandCodeModel.extend({
  kitBase: RelatedWarzoneTwoKitBaseModel,
}))
