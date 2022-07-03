import { ChannelsController } from "@Server/controllers/channels"
import { createRouter } from "@Server/createRouter"
import { channelsCommandStringsRouter } from "@Server/routers/channels/commandStrings"
import { channelsManagersRouter } from "@Server/routers/channels/managers"
import { channelsOverlayRouter } from "@Server/routers/channels/overlays"
import { channelsGamesRouter } from "./games"
import { channelsKitsRouter } from "./kits"
import { channelsLinksRouter } from "./links"
import { channelsPlanRouter } from "./plan"
import { channelsProfileRouter } from "./profile"

export const channelsRouter = createRouter()
	.merge("games/", channelsGamesRouter)
	.merge("kits/", channelsKitsRouter)
	.merge("profile/", channelsProfileRouter)
	.merge("overlay/", channelsOverlayRouter)
	.merge("managers/", channelsManagersRouter)
	.merge("command-strings/", channelsCommandStringsRouter)
	.merge("links/", channelsLinksRouter)
	.merge("plan/", channelsPlanRouter)
	.merge("top", ChannelsController.listTopChannels)
	.merge("rising", ChannelsController.listRisingChannels)
	.merge("live", ChannelsController.listLiveChannels)
	.merge("dashboard", ChannelsController.getDashboardChannel)
	.merge("count", ChannelsController.countChannels)
	.merge("countAll", ChannelsController.countAllChannels)
	.merge("create", ChannelsController.createChannel)
	.merge("update", ChannelsController.updateChannel)
	.merge("delete", ChannelsController.deleteChannel)
