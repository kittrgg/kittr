import { Channel, prisma } from "@kittr/prisma"

export const updateChannel = async ({ channelId, data }: { channelId: string; data: Partial<Channel> }) => {
	const result = await prisma.channel.update({
		where: { id: channelId },
		data
	})

	return result
}

export const deleteChannel = async ({ channelId }: { channelId: string }) => {
	const channel = await prisma.channel.delete({
		where: {
			id: channelId
		}
	})

	return channel
}

export const listKistBases = async () => {
	const result = await prisma.warzoneKitBase.findMany({})

	return result
}
