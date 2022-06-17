import { prisma, ChannelAffiliate } from "@kittr/prisma"
import validator from "validator"
import { TRPCError } from "@trpc/server"
import { checkRole } from "@Server/services/users"

export const createAffiliate = async ({
	channelProfileId,
	company,
	code,
	description,
	url
}: Partial<ChannelAffiliate>) => {
	if (url) {
		if (!validator.isURL(url)) {
			throw new TRPCError({ code: "BAD_REQUEST", message: "Invalid URL" })
		}
	}

	if (!channelProfileId) {
		throw new TRPCError({ code: "BAD_REQUEST", message: "Missing channelProfileId." })
	}

	const newAffiliate = await prisma.channel.update({
		where: { id: channelProfileId },
		data: {
			profile: {
				update: {
					affiliates: {
						create: {
							code,
							company,
							description,
							url
						}
					}
				}
			}
		}
	})
	return newAffiliate
}

export const updateAffiliate = async ({
	authToken,
	channelId,
	data
}: {
	authToken: string
	channelId: string
	data: Partial<ChannelAffiliate> & { id: string }
}) => {
	await checkRole({ authToken, channelId, roles: ["OWNER", "ADMIN"] })

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
