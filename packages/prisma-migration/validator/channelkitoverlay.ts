import * as z from "zod"
import { CompleteChannel, RelatedChannelModel, CompleteWarzoneKit, RelatedWarzoneKitModel } from "./index"

export const ChannelKitOverlayModel = z.object({
  id: z.string(),
  channelId: z.string(),
  backgroundColorPrimary: z.string().nullish(),
  backgroundColorSecondary: z.string().nullish(),
  textColorPrimary: z.string().nullish(),
  textColorSecondary: z.string().nullish(),
  textColorAccent: z.string().nullish(),
  isOverlayVisible: z.boolean(),
  primaryKitId: z.string().nullish(),
  secondaryKitId: z.string().nullish(),
})

export interface CompleteChannelKitOverlay extends z.infer<typeof ChannelKitOverlayModel> {
  channel: CompleteChannel
  primaryKit?: CompleteWarzoneKit | null
  secondaryKit?: CompleteWarzoneKit | null
}

/**
 * RelatedChannelKitOverlayModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedChannelKitOverlayModel: z.ZodSchema<CompleteChannelKitOverlay> = z.lazy(() => ChannelKitOverlayModel.extend({
  channel: RelatedChannelModel,
  primaryKit: RelatedWarzoneKitModel.nullish(),
  secondaryKit: RelatedWarzoneKitModel.nullish(),
}))
