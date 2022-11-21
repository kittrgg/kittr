import { CompleteChannel, RelatedChannelModel } from "./index"
import { ChannelPlanType } from "@prisma/client"
import * as z from "zod"

export const ChannelPlanModel = z.object({
	id: z.string(),
	stripeSubscriptionId: z.string().nullish(),
	type: z.nativeEnum(ChannelPlanType),
	channelId: z.string()
})

export interface CompleteChannelPlan extends z.infer<typeof ChannelPlanModel> {
	channel: CompleteChannel
}

/**
 * RelatedChannelPlanModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedChannelPlanModel: z.ZodSchema<CompleteChannelPlan> = z.lazy(
	() =>
		ChannelPlanModel.extend({
			channel: RelatedChannelModel
		})
)
