import { prisma, Prisma, ChannelPcSpec } from "@kittr/prisma"
import { checkRole } from "@Server/services/users"

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
	authToken,
	channelId,
	data
}: {
	authToken: string
	channelId: string
	data: Omit<ChannelPcSpec, "id" | "channelProfileId">
}) => {
	await checkRole({ authToken, channelId, roles: ["OWNER", "EDITOR"] })

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
	authToken,
	pcSpecId,
	channelId,
	data
}: {
	authToken: string
	pcSpecId: string
	channelId: string
	data: Prisma.ChannelPcSpecUpdateInput
}) => {
	await checkRole({ authToken, channelId, roles: ["OWNER"] })

	const pcSpec = await prisma.channelPcSpec.update({
		where: {
			id: pcSpecId
		},
		data
	})

	return pcSpec
}

export const deletePcSpec = async ({
	authToken,
	channelId,
	pcSpecId
}: {
	authToken: string
	channelId: string
	pcSpecId: string
}) => {
	await checkRole({ authToken, channelId, roles: ["OWNER"] })

	const pcSpec = await prisma.channelPcSpec.delete({
		where: {
			id: pcSpecId
		}
	})

	return pcSpec
}
