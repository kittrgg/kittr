import * as z from "zod"
import { CompleteWarzoneKitBase, RelatedWarzoneKitBaseModel } from "./index"

export const WarzoneKitOptionModel = z.object({
  id: z.string(),
  gameId: z.string(),
  displayName: z.string(),
  slotKey: z.string(),
  orderPlacement: z.number().int(),
  kitBaseId: z.string(),
})

export interface CompleteWarzoneKitOption extends z.infer<typeof WarzoneKitOptionModel> {
  kitBase: CompleteWarzoneKitBase
}

/**
 * RelatedWarzoneKitOptionModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedWarzoneKitOptionModel: z.ZodSchema<CompleteWarzoneKitOption> = z.lazy(() => WarzoneKitOptionModel.extend({
  kitBase: RelatedWarzoneKitBaseModel,
}))
