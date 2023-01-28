import { authedProcedure } from "@Server/initTRPC"
import { prisma } from "@kittr/prisma"

const listChannels = authedProcedure.query(async ({ ctx }) => {
	const channels = prisma.channel.findMany({
		where: {
			managers: {
				some: {
					firebaseId: ctx.user.uid
				}
			}
		},
		include: {
			profile: true,
			plan: {
				select: { type: true }
			},
			managers: true
		}
	})

	return channels
})

export const ManagersChannelsController = {
	listChannels
}
