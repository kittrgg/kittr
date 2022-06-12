import * as z from "zod"
import { CompleteGame, RelatedGameModel, CompleteChannelAffiliateCode, RelatedChannelAffiliateCodeModel, CompleteChannelCustomGameCommand, RelatedChannelCustomGameCommandModel, CompleteKit, RelatedKitModel, CompleteChannelKitOverlay, RelatedChannelKitOverlayModel, CompleteChannelManager, RelatedChannelManagerModel, CompleteChannelProfile, RelatedChannelProfileModel, CompleteChannelPlan, RelatedChannelPlanModel, CompleteChannelLink, RelatedChannelLinkModel } from "./index"

export const ChannelModel = z.object({
  id: z.string(),
  createdAt: z.date(),
  displayName: z.string(),
  urlSafeName: z.string(),
  viewCount: z.number().int(),
  previousUpdater: z.string().nullish(),
})

export interface CompleteChannel extends z.infer<typeof ChannelModel> {
  games: CompleteGame[]
  gameAffiliateCodes: CompleteChannelAffiliateCode[]
  customGameCommands: CompleteChannelCustomGameCommand[]
  kits: CompleteKit[]
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
export const RelatedChannelModel: z.ZodSchema<CompleteChannel> = z.lazy(() => ChannelModel.extend({
  games: RelatedGameModel.array(),
  gameAffiliateCodes: RelatedChannelAffiliateCodeModel.array(),
  customGameCommands: RelatedChannelCustomGameCommandModel.array(),
  kits: RelatedKitModel.array(),
  overlay: RelatedChannelKitOverlayModel.nullish(),
  managers: RelatedChannelManagerModel.array(),
  profile: RelatedChannelProfileModel.nullish(),
  plan: RelatedChannelPlanModel.nullish(),
  links: RelatedChannelLinkModel.array(),
}))
