import { Channel } from "@Services/mongodb/models"

interface IFunc {
	/**
	 * @params
	 * limit: How many Channels do you want?
	 *
	 * skip: Optional. Skip first n results.
	 *
	 * @returns
	 * Promise with array of channels.
	 */
	(params: { limit: number; skip?: number }): Promise<IChannel[]>
}

/**
 * SERVER SIDE ONLY!
 *
 * Get channels that are on the platform. Accepts parameters for limit and skip.
 */
export const getChannelsQuery: IFunc = async ({ limit, skip = 0 }) => {
	const result = await Channel.aggregate<IChannel>([
		{
			$sort: {
				viewCount: -1
			}
		},
		{ $skip: skip },
		{ $limit: limit },
		{ $unset: "kits" }
	])

	const serialized = result.map((channel) => ({
		...channel,
		_id: channel._id.toString(),
		createdDate: channel.createdDate.toString(),
		games: channel.games.map((game: IGame) => ({ ...game, id: game.id.toString() }))
	}))

	return serialized
}
