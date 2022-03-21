import { prisma, Channel } from "@kittr/prisma"
interface SerializedChannel extends Omit<Channel, "createdAt"> {
	createdAt: string
}
/**
 * SERVER SIDE ONLY!
 *
 * Get the top channels on the platform. */
export const topChannelsQuery = async ({
	limit,
	serialized
}: {
	limit: number
	serialized?: boolean
}): Promise<Channel[] | SerializedChannel[]> => {
	const result = await prisma.channel.findMany({
		where: {
			profile: {
				hasProfileImage: true
			}
		},
		orderBy: {
			viewCount: "desc"
		},
		take: limit,
		include: {
			profile: true
		}
	})

	if (serialized) {
		return result.map((channel) => ({
			...channel,
			createdAt: channel.createdAt.toISOString()
		}))
	}

	console.log(result)

	return result
}
