import { ChannelsGamesController } from "@Server/controllers/channels/games"
import { createRouter } from "@Server/createRouter"

export const channelsRouter = createRouter()
	.merge("add", ChannelsGamesController.addGameToChannel)
	.merge("delete", ChannelsGamesController.deleteGameFromChannel)
