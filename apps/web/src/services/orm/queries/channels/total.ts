import Channel from "@Services/orm/models/Channel"

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
	const result = await Channel.aggregate([
		{
			$count: "count"
		}
	])

	return result[0].count
}
