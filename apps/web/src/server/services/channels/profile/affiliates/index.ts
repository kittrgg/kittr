import { prisma, ChannelAffiliate } from "@kittr/prisma"
import validator from "validator"
import { TRPCError } from "@trpc/server"

export const createAffiliate = async ({ data }: { data: Partial<ChannelAffiliate> }) => {
	if (data.url) {
		if (!validator.isURL(data.url)) {
			throw new TRPCError({ code: "BAD_REQUEST", message: "Invalid URL" })
		}
	}

	if (!data.channelProfileId) {
		throw new TRPCError({ code: "BAD_REQUEST", message: "Missing channelProfileId." })
	}

	const newAffiliate = await prisma.channel.update({
		where: { id: data.channelProfileId },
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
	const channel = await prisma.channelProfile.update({
		where: { id: channelId },
		data: {
			affiliates: {
				delete: {
					id: affiliateId
				}
			}
		}
	})

	return channel
}
