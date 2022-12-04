import * as z from "zod"
import { CompleteChannelProfile, RelatedChannelProfileModel } from "./index"

export const ChannelAffiliateModel = z.object({
	id: z.string(),
	code: z.string().nullish(),
	description: z.string().nullish(),
	company: z.string().nullish(),
	url: z.string().nullish(),
	channelProfileId: z.string().nullish()
})

export interface CompleteChannelAffiliate
	extends z.infer<typeof ChannelAffiliateModel> {
	channelProfile?: CompleteChannelProfile | null
}

/**
 * RelatedChannelAffiliateModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedChannelAffiliateModel: z.ZodSchema<CompleteChannelAffiliate> =
	z.lazy(() =>
		ChannelAffiliateModel.extend({
			channelProfile: RelatedChannelProfileModel.nullish()
		})
	)
