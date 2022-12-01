import {
	CompleteChannel,
	RelatedChannelModel,
	CompleteWarzoneTwoKit,
	RelatedWarzoneTwoKitModel
} from "./index"
import * as z from "zod"

export const ChannelKitOverlayModel = z.object({
	id: z.string(),
	channelId: z.string(),
	backgroundColorPrimary: z.string().nullish(),
	backgroundColorSecondary: z.string().nullish(),
	textColorPrimary: z.string().nullish(),
	textColorSecondary: z.string().nullish(),
	textColorAccent: z.string().nullish(),
	isOverlayVisible: z.boolean(),
	primaryWzTwoKitId: z.string().nullish(),
	secondaryWzTwoKitId: z.string().nullish()
})

export interface CompleteChannelKitOverlay
	extends z.infer<typeof ChannelKitOverlayModel> {
	channel: CompleteChannel
	primaryWzTwoKit?: CompleteWarzoneTwoKit | null
	secondaryWzTwoKit?: CompleteWarzoneTwoKit | null
}

/**
 * RelatedChannelKitOverlayModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedChannelKitOverlayModel: z.ZodSchema<CompleteChannelKitOverlay> =
	z.lazy(() =>
		ChannelKitOverlayModel.extend({
			channel: RelatedChannelModel,
			primaryWzTwoKit: RelatedWarzoneTwoKitModel.nullish(),
			secondaryWzTwoKit: RelatedWarzoneTwoKitModel.nullish()
		})
	)
