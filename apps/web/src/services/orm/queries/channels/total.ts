import { prisma } from "@kittr/prisma"

interface IChannelQuery {
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
export const totalChannelsQuery: IChannelQuery = async () => {
	return await prisma.channel.count()
}
