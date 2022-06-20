import { createController } from "@Server/createController"
import { authenticateUser } from "@Server/middlewares/authenticateUser"
import * as ChannelsManagersOwnersService from "@Server/services/channels/managers/owners"
import { checkRole } from "@Server/services/users"
import { z } from "zod"

const editOwner = createController()
	.middleware(authenticateUser)
	.mutation("", {
		input: z.object({
			channelId: z.string(),
			newOwnerEmail: z.string()
		}),
		async resolve({ ctx, input }) {
			const { id } = await checkRole({ firebaseUserId: ctx.user.uid, channelId: input.channelId, roles: ["OWNER"] })

			const channel = await ChannelsManagersOwnersService.editOwner({
				channelId: input.channelId,
				previousOwnerId: id,
				newOwnerEmail: input.newOwnerEmail
			})
			return channel
		}
	})

export const ChannelsManagersOwnersController = {
	editOwner
}
