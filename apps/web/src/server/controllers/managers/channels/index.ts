import { createController } from "@Server/createController"
import { authenticateUser } from "@Server/middlewares/authenticateUser"
import * as ManagersChannelsService from "@Server/services/managers/channels"

const listChannels = createController()
	.middleware(authenticateUser)
	.query("", {
		async resolve({ ctx }) {
			const channels = await ManagersChannelsService.listChannels(ctx.user.uid)

			return channels
		}
	})

export const ManagersChannelsController = {
	listChannels
}
