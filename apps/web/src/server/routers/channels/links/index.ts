import { ChannelsLinksController } from "@Server/controllers/channels/links"
import { createRouter } from "@Server/createRouter"

export const channelsLinksRouter = createRouter().merge("upsert", ChannelsLinksController.upsertLinks)
