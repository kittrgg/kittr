import { prisma } from "@kittr/prisma"
import { checkRole, getUserByEmail } from "@Server/services/users"

export const editOwner = async ({authToken, channelId, newOwnerEmail }: {authToken: string, channelId: string; newOwnerEmail: string }) => {
	const {user, manager: previousOwner}	 =await checkRole({ authToken, channelId, roles: ["OWNER"] })

	const newOwnerFirebaseId = await getUserByEmail(newOwnerEmail).then((user) => user.uid)


	/** This is not a Firebase id! This is the id of the record in the database. */
	const newOwnerId = await prisma.channelManager.findFirst({
		where: { channel: { id: channelId }, firebaseId: newOwnerFirebaseId },
		select: {
			id: true
		}
	})

	const channel = await prisma.channel.update({
		where: { id: channelId },
		data: {
			managers: {
				update: [
					{
						where: {
							id: previousOwner.id
						},
						data: {
							role: "ADMIN"
						}
					},
					{
						where: {
							id: newOwnerId?.id
						},
						data: {
							role: "OWNER"
						}
					}
				]
			}
		}
	})

	return channel
}
