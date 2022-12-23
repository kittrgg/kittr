import { Prisma, prisma } from "@kittr/prisma"

export const ChannelWithIncludes = Prisma.validator<Prisma.ChannelArgs>()({
	include: {
		profile: true,
		links: true
	}
})

export type TChannelWithIncludes = typeof ChannelWithIncludes

interface Params {
	limit: number
	skip: number
}

/**
 * SERVER SIDE ONLY!
 *
 * Get channels that are on the platform. Accepts parameters for limit and skip.
 */
export const getTopChannelsQuery = async (params: Params) => {
	const result = await prisma.channel.findMany({
		orderBy: {
			viewCount: "desc"
		},
		skip: params.skip,
		take: params.limit,
		include: {
			profile: true,
			links: true
		}
	})

	return result
}

export type getTopChannelsQueryReturnType = Prisma.PromiseReturnType<typeof getTopChannelsQuery>
