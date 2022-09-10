import * as z from "zod"
import { ChannelManagerRoles } from "@prisma/client"
import { CompleteChannel, RelatedChannelModel } from "./index"

export const ChannelManagerModel = z.object({
  id: z.string(),
  firebaseId: z.string(),
  role: z.nativeEnum(ChannelManagerRoles),
  channelId: z.string(),
})

export interface CompleteChannelManager extends z.infer<typeof ChannelManagerModel> {
  channel: CompleteChannel
}

/**
 * RelatedChannelManagerModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedChannelManagerModel: z.ZodSchema<CompleteChannelManager> = z.lazy(() => ChannelManagerModel.extend({
  channel: RelatedChannelModel,
}))
