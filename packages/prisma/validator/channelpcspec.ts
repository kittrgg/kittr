import * as z from "zod"
import { CompleteChannelProfile, RelatedChannelProfileModel } from "./index"

export const ChannelPcSpecModel = z.object({
	id: z.string(),
	partType: z.string(),
	partName: z.string(),
	channelProfileId: z.string()
})

export interface CompleteChannelPcSpec
	extends z.infer<typeof ChannelPcSpecModel> {
	channelProfile: CompleteChannelProfile
}

/**
 * RelatedChannelPcSpecModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedChannelPcSpecModel: z.ZodSchema<CompleteChannelPcSpec> =
	z.lazy(() =>
		ChannelPcSpecModel.extend({
			channelProfile: RelatedChannelProfileModel
		})
	)
