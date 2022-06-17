import { createRouter } from "@Server/createRouter"
import { ChannelsPcSpecsController } from "@Server/controllers/channels/pcSpecs"

export const channelsPcSpecsRouter = createRouter()
	.merge("list", ChannelsPcSpecsController.listPcSpec)
	.merge("get", ChannelsPcSpecsController.getPcSpec)
	.merge("create", ChannelsPcSpecsController.createPcSpec)
	.merge("update", ChannelsPcSpecsController.updatePcSpec)
	.merge("delete", ChannelsPcSpecsController.deletePcSpec)
