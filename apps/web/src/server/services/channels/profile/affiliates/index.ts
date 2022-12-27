import { ChannelAffiliate, prisma } from "@kittr/prisma"
import { TRPCError } from "@trpc/server"
import validator from "validator"

export const createAffiliate = async ({ channelId, data }: { channelId: string; data: Partial<ChannelAffiliate> }) => {
	if (data.url) {
		if (!validator.isURL(data.url)) {
			throw new TRPCError({ code: "BAD_REQUEST", message: "Invalid URL" })
		}
	}

	const newAffiliate = await prisma.channel.update({
		where: { id: channelId },
		data: {
			profile: {
				update: {
					affiliates: {
						create: data
					}
				}
			}
		}
	})
	return newAffiliate
}

export const updateAffiliate = async ({ data }: { data: Partial<ChannelAffiliate> & { id: string } }) => {
	const updatedAffiliate = await prisma.channelAffiliate.upsert({
		where: {
			id: data.id
		},
		update: data,
		create: data
	})

	return updatedAffiliate
}

export const deleteAffiliate = async ({ channelId, affiliateId }: { channelId: string; affiliateId: string }) => {
	const channel = await prisma.channel.update({
		where: { id: channelId },
		data: {
			profile: {
				update: {
					affiliates: {
						delete: {
							id: affiliateId
						}
					}
				}
			}
		}
	})

	return channel
}
