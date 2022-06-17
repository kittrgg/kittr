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

export const createPcSpec = async ({ authToken, data }: { authToken: string; data: Omit<ChannelPcSpec, "id"> }) => {
	const pcSpec = await prisma.channelPcSpec.create({
		data: {
			partName: data.partName,
			partType: data.partType,
			channelProfile: {
				connect: {
					id: data.channelProfileId
				}
			}
		}
	})
}

export const updatePcSpec = async ({
	authToken,
	channelId,
	pcSpecId,
	update
}: {
	authToken: string
	channelId: string
	pcSpecId: string
	update: Prisma.ChannelPcSpecUpdateInput
}) => {
	await checkRole({ authToken, channelId, roles: ["OWNER"] })

	const pcSpec = await prisma.channelPcSpec.update({
		where: {
			id: pcSpecId
		},
		data: update
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
