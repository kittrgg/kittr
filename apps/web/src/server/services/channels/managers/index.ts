import { prisma } from "@kittr/prisma"

export const promoteManager = async ({ channelId, managerId }: { channelId: string; managerId: string }) => {
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
