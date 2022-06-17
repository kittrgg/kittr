import { prisma } from "@kittr/prisma"
import { checkRole, verifyIdToken } from "@Server/services/users"

export const getCommandString = async ({ channelId }: { channelId: string }) => {
	const commandString = await prisma.channelCustomGameCommand.findFirst({
		where: {
			id: channelId
		},
		select: {
			command: true
		}
	})

	return commandString
}

export const updateCommandString = async ({
	authToken,
	newString,
	channelId
}: {
	authToken: string
	newString: string
	channelId: string
}) => {
	await checkRole({ authToken, channelId, roles: ["ADMIN", "EDITOR"] })

	const commandString = await prisma.channelCustomGameCommand.update({
		where: {
			id: channelId
		},
		data: {
			command: newString
		},
		select: {
			command: true
		}
	})

	return commandString
}
