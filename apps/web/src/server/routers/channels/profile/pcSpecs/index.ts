import { ChannelsPcSpecsController } from "@Server/controllers/channels/pcSpecs"
import { createRouter } from "@Server/createRouter"

export const channelsPcSpecsRouter = createRouter()
	.merge("list", ChannelsPcSpecsController.listPcSpec)
	.merge("get", ChannelsPcSpecsController.getPcSpec)
	.merge("create", ChannelsPcSpecsController.createPcSpec)
	.merge("update", ChannelsPcSpecsController.updatePcSpec)
	.merge("delete", ChannelsPcSpecsController.deletePcSpec)
