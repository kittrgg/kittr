import { createController } from "@Server/createController"
import { authenticateUser } from "@Server/middlewares/authenticateUser"
import * as ManagersChannelsService from "@Server/services/managers/channels"
import { captureMessage } from '@sentry/nextjs'

const listChannels = createController()
	.middleware(authenticateUser)
	.query("", {
		async resolve({ ctx }) {
			captureMessage(`User ctx is: ${ctx.user.uid}`)
			const channels = await ManagersChannelsService.listChannels(ctx.user.uid)
			captureMessage(`User with ctx ${ctx.user.uid} got payload of ${JSON.stringify(channels)}`)

			return channels
		}
	})

export const ManagersChannelsController = {
	listChannels
}
