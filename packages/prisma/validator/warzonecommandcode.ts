import * as z from "zod"
import { CompleteWarzoneKitBase, RelatedWarzoneKitBaseModel } from "./index"

export const WarzoneCommandCodeModel = z.object({
  id: z.string(),
  code: z.string(),
  kitBaseId: z.string(),
})

export interface CompleteWarzoneCommandCode extends z.infer<typeof WarzoneCommandCodeModel> {
  kitBase: CompleteWarzoneKitBase
}

/**
 * RelatedWarzoneCommandCodeModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedWarzoneCommandCodeModel: z.ZodSchema<CompleteWarzoneCommandCode> = z.lazy(() => WarzoneCommandCodeModel.extend({
  kitBase: RelatedWarzoneKitBaseModel,
}))
