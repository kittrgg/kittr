import { prisma } from "@kittr/prisma"
import { checkRole } from "@Server/services/users"

export const promoteManager = async ({ channelId, authToken }: { channelId: string; authToken: string }) => {
	const { manager } = await checkRole({ authToken, channelId, roles: ["OWNER", "ADMIN"] })

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
	const { manager } = await checkRole({ authToken, channelId, roles: ["OWNER", "ADMIN"] })

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

export const deleteManager = async ({
	channelId,
	managerIdToDelete,
	authToken
}: {
	channelId: string
	managerIdToDelete: string
	authToken: string
}) => {
	await checkRole({ authToken, channelId, roles: ["OWNER", "ADMIN"] })

	const channel = await prisma.channel.update({
		where: {
			id: channelId
		},
		data: {
			managers: {
				delete: {
					id: managerIdToDelete
				}
			}
		}
	})

	return channel
}
