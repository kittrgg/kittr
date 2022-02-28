import mongoose from "mongoose"
import { IChannel } from "@kittr/types/channel"
import { Channel } from "@Services/mongodb/models"

interface IFunc {
	/**
	 * @params
	 *  gameId: ObjectId of the game
	 *
	 * limit: How many channels do you want?
	 *
	 * skip: How many channels should we skip before returning your results?
	 *
	 * @returns
	 * Promise with array of channels, ordered by view count (channels do not have kits, managers, or games on them)
	 *
	 */
	(params: {
		/** ObjectId of the game */
		gameId: string
		/** How many channels do you want? */
		limit: number
		/** How many channels should we skip before returning your results? */
		skip: number
	}): Promise<IChannel[]>
}

/**
 * SERVER SIDE ONLY!
 *
 * Get channels for a certain game. Accepts parameters for limiting and skipping.
 */
export const channelsByGameQuery: IFunc = async ({ gameId, limit, skip = 0 }) => {
	const result = await Channel.aggregate<IChannel>([
		{
			$match: {
				games: {
					$elemMatch: {
						id: new mongoose.Types.ObjectId(gameId)
					}
				}
			}
		},
		{
			$sort: {
				viewCount: -1
			}
		},
		{ $skip: skip },
		{ $limit: limit },
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

	const serialized = result.map((channel) => ({
		...channel,
		_id: channel._id.toString()
	}))

	return serialized
}
