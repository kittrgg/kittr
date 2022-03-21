import { Channel } from "@Services/orm/models"
import { IChannel } from "@kittr/types/channel"

interface ITopChannels {
	/**
	 * @params
	 * limit: How many channels do you want?
	 *
	 * @returns
	 * Promise with array of channels (channels do not have kits, managers, or games on them)
	 *
	 */
	(limit: number): Promise<IChannel[]>
}

/**
 * SERVER SIDE ONLY!
 *
 * Get the top channels on the platform. */
export const topChannelsQuery: ITopChannels = async (limit) => {
	const result = await Channel.aggregate<IChannel>([
		{
			$match: {
				"meta.hasProfileImage": true
			}
		},
		{
			$sort: {
				viewCount: -1
			}
		},
		{
			$limit: limit
		},
		{
			$project: {
				kits: 0,
				previousUpdater: 0,
				__v: 0,
				createdDate: 0,
				managers: 0,
				games: 0
			}
		}
	])

	const serialized = result.map((channel) => {
		return {
			...channel,
			_id: channel._id.toString()
		}
	})

	return serialized
}
