import { prisma } from '@kittr/prisma';

/**
 * @returns
 * Promise for count of all channels on platform
 *
 */
type ChannelQuery = () => Promise<number>;

/**
 * SERVER SIDE ONLY!
 *
 * Get the total channels on the platform.
 */
export const totalChannelsQuery: ChannelQuery = async () => {
  return await prisma.channel.count();
};
