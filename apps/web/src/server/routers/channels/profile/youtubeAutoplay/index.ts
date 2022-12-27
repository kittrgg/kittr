import { ChannelsProfileYouTubeAutoplayController } from "@Server/controllers/channels/profile/youtubeAutoplay"
import { createRouter } from "@Server/createRouter"

export const youtubeAutoplayRouter = createRouter().merge("upsert", ChannelsProfileYouTubeAutoplayController.toggle)
