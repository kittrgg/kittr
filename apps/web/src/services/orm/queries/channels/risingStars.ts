import { prisma, Channel } from "@kittr/prisma"
interface SerializedChannel extends Omit<Channel, "createdAt"> {
	createdAt: string
}
/**
 * SERVER SIDE ONLY!
 *
 * Get the top channels on the platform. */
export const risingStarsQuery = async ({
	limit,
	skip,
	viewsGreaterThan,
	serialized
}: {
	skip: number
	limit: number
	serialized?: boolean
	viewsGreaterThan: number
}): Promise<Channel[] | SerializedChannel[]> => {
	const where = {
		profile: {
			hasProfileImage: true
		},
		viewCount: {
			gte: viewsGreaterThan
		}
	}

	const channelCount = await prisma.channel.count({
		where
	})

	const randomSkip = Math.min(channelCount - skip, Math.max(skip, Math.floor(Math.random() * channelCount)))

	const result = await prisma.channel.findMany({
		orderBy: {
			viewCount: "desc"
		},
		where,
		skip: randomSkip,
		take: limit,
		include: {
			profile: true
		}
	})

	if (serialized) {
		const serializedResult = result.map((channel) => ({
			...channel,
			createdAt: channel.createdAt.toISOString()
		}))

		return serializedResult
	}

	return result
}
