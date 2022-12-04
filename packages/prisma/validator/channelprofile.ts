import * as z from "zod"
import {
	CompleteChannelBrandColor,
	RelatedChannelBrandColorModel,
	CompleteChannelPcSpec,
	RelatedChannelPcSpecModel,
	CompleteChannelAffiliate,
	RelatedChannelAffiliateModel,
	CompleteSetupPhoto,
	RelatedSetupPhotoModel,
	CompleteChannel,
	RelatedChannelModel
} from "./index"

export const ChannelProfileModel = z.object({
	id: z.string(),
	hasCoverPhoto: z.boolean(),
	hasProfileImage: z.boolean(),
	youtubeAutoplay: z.boolean(),
	channelId: z.string()
})

export interface CompleteChannelProfile
	extends z.infer<typeof ChannelProfileModel> {
	brandColors: CompleteChannelBrandColor[]
	channelPcSpecs: CompleteChannelPcSpec[]
	affiliates: CompleteChannelAffiliate[]
	setupPhotos: CompleteSetupPhoto[]
	channel: CompleteChannel
}

/**
 * RelatedChannelProfileModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedChannelProfileModel: z.ZodSchema<CompleteChannelProfile> =
	z.lazy(() =>
		ChannelProfileModel.extend({
			brandColors: RelatedChannelBrandColorModel.array(),
			channelPcSpecs: RelatedChannelPcSpecModel.array(),
			affiliates: RelatedChannelAffiliateModel.array(),
			setupPhotos: RelatedSetupPhotoModel.array(),
			channel: RelatedChannelModel
		})
	)
