import { allGamesQuery, allBasesQuery, allOptionsQuery } from "../index"

interface IFunc {
	/**
	 * @params
	 * Array of raw channels from mongodb.
	 *
	 * @returns
	 * Promise with array of serialized channels.
	 */
	(channelsArr: IChannel[]): Promise<IChannel[]>
}

/** Serialize an array of channels from mongodb. Needed to make getStaticProps happy. */
export const serializeChannels: IFunc = async (channelsArr) => {
	const [games, kitBases, kitOptions] = await Promise.all([allGamesQuery(), allBasesQuery(), allOptionsQuery()])

	const serialized = channelsArr.map((channel: IChannel) => ({
		...channel,
		_id: channel._id.toString(),
		games: channel.games.map((game: IGame) => ({
			...game,
			id: game.id.toString(),
			...games.find((rawGame) => rawGame._id.toString() === game.id.toString())
		})),
		createdDate: channel.createdDate.toString(),
		kits: channel.kits.map((kit) => ({
			...kit,
			_id: kit._id.toString(),
			base: kitBases
				.filter((base) => base._id.toString() === kit.baseId.toString())
				.map((base) => ({
					...base,
					gameInfo: {
						...base.gameInfo,
						availableOptions: []
					}
				}))[0],
			options: kit.options.map(
				(opt) => kitOptions.find((option) => option._id.toString() === opt.toString()) as IKitOption
			)
		}))
	}))

	return serialized
}
