import * as z from "zod"
import { CompleteKitBase, RelatedKitBaseModel } from "./index"

export const CommandCodeModel = z.object({
  id: z.string(),
  code: z.string(),
  kitBaseId: z.string(),
})

export interface CompleteCommandCode extends z.infer<typeof CommandCodeModel> {
  kitBase: CompleteKitBase
}

/**
 * RelatedCommandCodeModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedCommandCodeModel: z.ZodSchema<CompleteCommandCode> = z.lazy(() => CommandCodeModel.extend({
  kitBase: RelatedKitBaseModel,
}))
