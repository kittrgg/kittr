import { prisma } from "@kittr/prisma"

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

export const updateCommandString = async ({ newString, channelId }: { newString: string; channelId: string }) => {
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
