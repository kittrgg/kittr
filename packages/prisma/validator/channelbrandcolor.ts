import * as z from "zod"
import { ChannelBrandColorTypes } from "@prisma/client"
import { CompleteChannelProfile, RelatedChannelProfileModel } from "./index"

export const ChannelBrandColorModel = z.object({
	id: z.string(),
	type: z.nativeEnum(ChannelBrandColorTypes),
	value: z.string(),
	channelProfileId: z.string().nullish()
})

export interface CompleteChannelBrandColor
	extends z.infer<typeof ChannelBrandColorModel> {
	channelProfile?: CompleteChannelProfile | null
}

/**
 * RelatedChannelBrandColorModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedChannelBrandColorModel: z.ZodSchema<CompleteChannelBrandColor> =
	z.lazy(() =>
		ChannelBrandColorModel.extend({
			channelProfile: RelatedChannelProfileModel.nullish()
		})
	)
