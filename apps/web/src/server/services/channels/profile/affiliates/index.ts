import { prisma, ChannelAffiliate } from "@kittr/prisma"
import validator from "validator"
import { TRPCError } from "@trpc/server"

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

export const updateAffiliate = async ({ id, data }: { id: string; data: Partial<Omit<ChannelAffiliate, "id">> }) => {
	const newAffiliate = await prisma.channelAffiliate.update({
		where: { id },
		data
	})
	return newAffiliate
}
