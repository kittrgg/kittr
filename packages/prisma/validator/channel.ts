import * as z from "zod"
import {
	CompleteGame,
	RelatedGameModel,
	CompleteChannelCreatorCode,
	RelatedChannelCreatorCodeModel,
	CompleteChannelCustomGameCommand,
	RelatedChannelCustomGameCommandModel,
	CompleteWarzoneKit,
	RelatedWarzoneKitModel,
	CompleteWarzoneTwoKit,
	RelatedWarzoneTwoKitModel,
	CompleteChannelKitOverlay,
	RelatedChannelKitOverlayModel,
	CompleteChannelManager,
	RelatedChannelManagerModel,
	CompleteChannelProfile,
	RelatedChannelProfileModel,
	CompleteChannelPlan,
	RelatedChannelPlanModel,
	CompleteChannelLink,
	RelatedChannelLinkModel
} from "./index"

export const ChannelModel = z.object({
	id: z.string(),
	createdAt: z.date(),
	displayName: z.string(),
	urlSafeName: z.string(),
	viewCount: z.number().int(),
	previousUpdater: z.string().nullish()
})

export interface CompleteChannel extends z.infer<typeof ChannelModel> {
	games: CompleteGame[]
	gameCreatorCodes: CompleteChannelCreatorCode[]
	customGameCommands: CompleteChannelCustomGameCommand[]
	warzoneKits: CompleteWarzoneKit[]
	warzoneTwoKits: CompleteWarzoneTwoKit[]
	overlay?: CompleteChannelKitOverlay | null
	managers: CompleteChannelManager[]
	profile?: CompleteChannelProfile | null
	plan?: CompleteChannelPlan | null
	links: CompleteChannelLink[]
}

/**
 * RelatedChannelModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedChannelModel: z.ZodSchema<CompleteChannel> = z.lazy(() =>
	ChannelModel.extend({
		games: RelatedGameModel.array(),
		gameCreatorCodes: RelatedChannelCreatorCodeModel.array(),
		customGameCommands: RelatedChannelCustomGameCommandModel.array(),
		warzoneKits: RelatedWarzoneKitModel.array(),
		warzoneTwoKits: RelatedWarzoneTwoKitModel.array(),
		overlay: RelatedChannelKitOverlayModel.nullish(),
		managers: RelatedChannelManagerModel.array(),
		profile: RelatedChannelProfileModel.nullish(),
		plan: RelatedChannelPlanModel.nullish(),
		links: RelatedChannelLinkModel.array()
	})
)
