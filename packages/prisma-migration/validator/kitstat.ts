import * as z from "zod"
import { CompleteKitBase, RelatedKitBaseModel } from "./index"

export const KitStatModel = z.object({
  id: z.string(),
  displayName: z.string(),
  value: z.string(),
  kitBaseId: z.string(),
})

export interface CompleteKitStat extends z.infer<typeof KitStatModel> {
  kitBase: CompleteKitBase
}

/**
 * RelatedKitStatModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedKitStatModel: z.ZodSchema<CompleteKitStat> = z.lazy(() => KitStatModel.extend({
  kitBase: RelatedKitBaseModel,
}))
