import { ChannelsProfileCreatorCodesController } from "@Server/controllers/channels/profile/creatorCodes"
import { createRouter } from "@Server/createRouter"

export const channelsCreatorCodesRouter = createRouter().merge(
	"upsert",

	ChannelsProfileCreatorCodesController.upsertCode
)
