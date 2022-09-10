import * as z from "zod"
import { CompleteKitBase, RelatedKitBaseModel } from "./index"

export const KitBaseCategoryModel = z.object({
  id: z.string(),
  displayName: z.string(),
})

export interface CompleteKitBaseCategory extends z.infer<typeof KitBaseCategoryModel> {
  kit: CompleteKitBase[]
}

/**
 * RelatedKitBaseCategoryModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedKitBaseCategoryModel: z.ZodSchema<CompleteKitBaseCategory> = z.lazy(() => KitBaseCategoryModel.extend({
  kit: RelatedKitBaseModel.array(),
}))
