import * as z from "zod"
import { CompleteChannelProfile, RelatedChannelProfileModel } from "./index"

export const SetupPhotoModel = z.object({
	id: z.string(),
	channelProfileId: z.string(),
	slot: z.number().int(),
	exists: z.boolean()
})

export interface CompleteSetupPhoto extends z.infer<typeof SetupPhotoModel> {
	channelProfile: CompleteChannelProfile
}

/**
 * RelatedSetupPhotoModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedSetupPhotoModel: z.ZodSchema<CompleteSetupPhoto> = z.lazy(
	() =>
		SetupPhotoModel.extend({
			channelProfile: RelatedChannelProfileModel
		})
)
