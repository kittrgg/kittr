import { prisma } from "@kittr/prisma"
import { TRPCError } from "@trpc/server"

export const promoteManager = async ({ channelId, managerId }: { channelId: string; managerId: string }) => {
	const manager = await prisma.channelManager.findFirst({
		where: {
			channelId,
			id: managerId,
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
						id: managerId
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

export const demoteManager = async ({ channelId, managerId }: { channelId: string; managerId: string }) => {
	const manager = await prisma.channelManager.findFirst({
		where: {
			channelId,
			id: managerId,
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
						id: managerId
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
