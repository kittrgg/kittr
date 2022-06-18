import { ChannelsCommandStringsController } from "@Server/controllers/channels/commandStrings"
import { createRouter } from "@Server/createRouter"

export const channelsCommandStringsRouter = createRouter().merge(
	"get",
	ChannelsCommandStringsController.getCommandString
)
.merge("update", ChannelsCommandStringsController.updateCommandString)
