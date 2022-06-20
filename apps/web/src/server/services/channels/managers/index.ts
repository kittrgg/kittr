import { prisma, ChannelManagerRoles } from "@kittr/prisma"
import { getUserByEmail } from "@Server/services/users"

export const createManager = async ({
	channelId,
	email,
	role
}: {
	channelId: string
	email: string
	role: ChannelManagerRoles
}) => {
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

	return channel
}

export const promoteManager = async ({
	channelId,
	managerIdToPromote
}: {
	channelId: string
	managerIdToPromote: string
	authToken: string
}) => {
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
	managerIdToDemote
}: {
	channelId: string
	managerIdToDemote: string
}) => {
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
	managerIdToDelete
}: {
	channelId: string
	managerIdToDelete: string
}) => {
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
