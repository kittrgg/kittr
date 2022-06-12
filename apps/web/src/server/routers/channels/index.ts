import { ChannelsController } from "@Server/controllers/channels"
import { createRouter } from "@Server/createRouter"
import { channelsGamesRouter } from "./games"
import { channelsKitsRouter } from "./kits"

export const channelsRouter = createRouter()
	.merge("games/", channelsGamesRouter)
	.merge("kits/", channelsKitsRouter)
	.merge("top", ChannelsController.listTopChannels)
	.merge("rising", ChannelsController.listRisingChannels)
	.merge("live", ChannelsController.listLiveChannels)
	.merge("dashboard", ChannelsController.getDashboardChannel)
	.merge("profile", ChannelsController.getChannelProfile)
	.merge("delete", ChannelsController.deleteChannel)
