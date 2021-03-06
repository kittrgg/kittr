import { ChannelPcSpec, prisma, Prisma } from "@kittr/prisma"

export const listPcSpecs = async (channelId: string) => {
	const channel = await prisma.channel.findFirst({
		where: {
			id: channelId
		},
		include: {
			profile: {
				include: {
					channelPcSpecs: true
				}
			}
		}
	})

	return channel
}

export const getPcSpec = async (pcSpecId: string) => {
	const pcSpec = await prisma.channelPcSpec.findFirst({
		where: {
			id: pcSpecId
		}
	})

	return pcSpec
}

export const createPcSpec = async ({
	channelId,
	data
}: {
	channelId: string
	data: Omit<ChannelPcSpec, "id" | "channelProfileId">
}) => {
	const pcSpec = await prisma.channelProfile.update({
		where: {
			channelId
		},
		data: {
			channelPcSpecs: {
				create: data
			}
		}
	})

	return pcSpec
}

export const updatePcSpec = async ({
	pcSpecId,
	channelId,
	data
}: {
	pcSpecId: string
	channelId: string
	data: Prisma.ChannelPcSpecUpdateInput
}) => {
	const pcSpec = await prisma.channelPcSpec.update({
		where: {
			id: pcSpecId
		},
		data
	})

	return pcSpec
}

export const deletePcSpec = async ({ channelId, pcSpecId }: { channelId: string; pcSpecId: string }) => {
	const pcSpec = await prisma.channelPcSpec.delete({
		where: {
			id: pcSpecId
		}
	})

	return pcSpec
}
