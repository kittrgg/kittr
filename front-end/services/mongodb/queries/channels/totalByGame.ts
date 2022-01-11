import mongoose from "mongoose"
import { Channel } from "@Services/mongodb/models"

interface IChannelsByGameQuery {
	/**
	 * @params
	 * gameId: ObjectId of the game
	 *
	 * @returns
	 * Promise containing number
	 *
	 */
	(gameId: string): Promise<number>
}

/**
 * SERVER SIDE ONLY!
 *
 * Get the total channels for a game.
 */
export const totalChannelsByGameQuery: IChannelsByGameQuery = async (gameId) => {
	const result = await Channel.aggregate([
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
			$count: "count"
		}
	])

	if (result.length === 0) return undefined

	return result[0].count
}
