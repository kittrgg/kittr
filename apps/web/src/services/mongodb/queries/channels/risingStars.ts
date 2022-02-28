import { Channel } from "@Services/mongodb/models"
import { IChannel } from "@kittr/types/channel"

interface IFunc {
	/**
	 * @params
	 * viewsGreaterThan: Minimum view threshold.
	 *
	 * skip: Amount of results to skip. Useful for skipping channels that already show up in "top" results or pagination.
	 *
	 * sample: How many channels do you want back?
	 *
	 * @returns
	 * Promise with array of channels (channels do not have kits, managers, or games on them)
	 *
	 */
	(params: {
		/** Minimum view threshold. */
		viewsGreaterThan: number
		/**  Amount of results to skip. Useful for skipping channels that already show up in "top" results or pagination. */
		skip: number
		/** How many channels do you want back? */
		sample: number
	}): Promise<IChannel[]>
}

/**
 * SERVER SIDE ONLY!
 *
 * Get channels who are worthy of mention from the platform but not quite in the top results.
 * */
export const risingStarsQuery: IFunc = async ({ viewsGreaterThan, skip, sample }) => {
	const result = await Channel.aggregate<IChannel>([
		{
			$match: {
				"meta.hasProfileImage": true,
				"viewCount": {
					$gte: viewsGreaterThan
				}
			}
		},
		{
			$sort: {
				viewCount: -1
			}
		},
		{
			$skip: skip
		},
		{
			$project: {
				kits: 0,
				previousUpdater: 0,
				createdDate: 0,
				managers: 0,
				games: 0
			}
		},
		{
			$sample: {
				size: sample
			}
		}
	])

	const serialized = result.map((channel) => ({
		...channel,
		_id: channel._id.toString()
	}))

	return serialized
}
