import { ChannelsProfileBrandColorsController } from "@Server/controllers/channels/profile/brandColors"
import { createRouter } from "@Server/createRouter"

export const channelsProfileRouter = createRouter()
  .merge("upsert", ChannelsProfileBrandColorsController.getChannelProfile)
