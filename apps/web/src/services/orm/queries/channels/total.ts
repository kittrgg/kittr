import { prisma } from "@kittr/prisma"

interface ChannelQuery {
	/**
	 * @returns
	 * Promise for count of all channels on platform
	 *
	 */
	(): Promise<number>
}

/**
 * SERVER SIDE ONLY!
 *
 * Get the total channels on the platform.
 */
export const totalChannelsQuery: ChannelQuery = async () => {
	return await prisma.channel.count()
}
