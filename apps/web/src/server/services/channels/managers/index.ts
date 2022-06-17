import { prisma } from "@kittr/prisma"
import { TRPCError } from "@trpc/server"
import { verifyIdToken } from "@Server/services/users"

export const promoteManager = async ({ channelId, authToken }: { channelId: string; authToken: string }) => {
	const user = await verifyIdToken(authToken)

	const manager = await prisma.channelManager.findFirst({
		where: {
			channelId,
			id: user.uid,
			role: "OWNER" || "ADMIN"
		}
	})

	if (!manager) {
		throw new TRPCError({
			code: "UNAUTHORIZED",
			message: "You do not have permission to do promote managers on this channel."
		})
	}

	const channel = await prisma.channel.update({
		where: {
			id: channelId
		},
		data: {
			managers: {
				update: {
					where: {
						id: manager.id
					},
					data: {
						role: "ADMIN"
					}
				}
			}
		}
	})

	return channel
}

export const demoteManager = async ({ channelId, authToken }: { channelId: string; authToken: string }) => {
	const user = await verifyIdToken(authToken)

	const manager = await prisma.channelManager.findFirst({
		where: {
			channelId,
			id: user.uid,
			role: "OWNER" || "ADMIN"
		}
	})

	if (!manager) {
		throw new TRPCError({
			code: "UNAUTHORIZED",
			message: "You do not have permission to do promote managers on this channel."
		})
	}

	const channel = await prisma.channel.update({
		where: {
			id: channelId
		},
		data: {
			managers: {
				update: {
					where: {
						id: manager.id
					},
					data: {
						role: "EDITOR"
					}
				}
			}
		}
	})

	return channel
}
