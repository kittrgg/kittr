import { CompleteChannel, RelatedChannelModel } from "./index"
import { LinkProperty } from "@prisma/client"
import * as z from "zod"

export const ChannelLinkModel = z.object({
	id: z.string(),
	property: z.nativeEnum(LinkProperty),
	value: z.string(),
	channelId: z.string()
})

export interface CompleteChannelLink extends z.infer<typeof ChannelLinkModel> {
	channel: CompleteChannel
}

/**
 * RelatedChannelLinkModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedChannelLinkModel: z.ZodSchema<CompleteChannelLink> = z.lazy(
	() =>
		ChannelLinkModel.extend({
			channel: RelatedChannelModel
		})
)
