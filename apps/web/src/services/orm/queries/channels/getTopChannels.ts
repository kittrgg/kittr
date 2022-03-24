import { prisma, Channel, ChannelProfile, ChannelLink } from "@kittr/prisma"

// TODO: Learn how to do this right, bro.

type WithSerialization<T, S extends boolean> = S extends true
	? Omit<T, "createdAt"> & {
			createdAt: string
	  }
	: T

type WithProfile<T, P extends boolean> = P extends true
	? T & {
			profile: ChannelProfile
	  }
	: T

type WithLinks<T, L extends boolean> = L extends true
	? T & {
			links: ChannelLink[]
	  }
	: T

type Value<S extends boolean, P extends boolean, L extends boolean> = WithSerialization<
	WithProfile<WithLinks<Channel[], L>, P>,
	S
>

interface Params<S extends boolean, K extends boolean, L extends boolean> {
	serialized?: S
	includeProfile?: K
	includeLinks?: L
	limit: number
	skip: number
}

/**
 * SERVER SIDE ONLY!
 *
 * Get channels that are on the platform. Accepts parameters for limit and skip.
 */
export const getTopChannelsQuery = async <S extends boolean, K extends boolean, L extends boolean>(
	params: Params<S, K, L>
): Promise<Value<S, K, L>> => {
	const result = await prisma.channel.findMany({
		orderBy: {
			viewCount: "desc"
		},
		skip: params.skip,
		take: params.limit,
		include: {
			profile: params.includeProfile,
			links: params.includeLinks
		}
	})

	if (params.serialized) {
		return result.map((channel) => ({
			...channel,
			createdAt: channel.createdAt.toISOString()
		})) as any
	}

	return result as any
}
