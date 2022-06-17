import { prisma, ChannelManagerRoles } from "@kittr/prisma"
import { checkRole } from "@Server/services/users"
import { getUserByEmail } from "@Server/services/users"

export const createManager = async ({
	authToken,
	channelId,
	email,
	role
}: {
	authToken: string
	channelId: string
	email: string
	role: ChannelManagerRoles
}) => {
	await checkRole({ authToken, channelId, roles: ["OWNER", "ADMIN"] })

	const newManager = await getUserByEmail(email)

	const channel = await prisma.channel.update({
		where: {
			id: channelId
		},
		data: {
			managers: {
				create: {
					firebaseId: newManager.uid,
					role
				}
			}
		}
	})
}

export const promoteManager = async ({
	channelId,
	managerIdToPromote,
	authToken
}: {
	channelId: string
	managerIdToPromote: string
	authToken: string
}) => {
	await checkRole({ authToken, channelId, roles: ["OWNER", "ADMIN"] })

	const channel = await prisma.channel.update({
		where: {
			id: channelId
		},
		data: {
			managers: {
				update: {
					where: {
						id: managerIdToPromote
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

export const demoteManager = async ({
	channelId,
	managerIdToDemote,
	authToken
}: {
	channelId: string
	managerIdToDemote: string
	authToken: string
}) => {
	await checkRole({ authToken, channelId, roles: ["OWNER", "ADMIN"] })

	const channel = await prisma.channel.update({
		where: {
			id: channelId
		},
		data: {
			managers: {
				update: {
					where: {
						id: managerIdToDemote
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
