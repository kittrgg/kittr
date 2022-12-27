import { ChannelsProfileBrandColorsController } from "@Server/controllers/channels/profile/brandColors"
import { createRouter } from "@Server/createRouter"

export const channelsProfileBrandColorsRouter = createRouter().merge(
	"upsert",
	ChannelsProfileBrandColorsController.upsertBrandColor
)
