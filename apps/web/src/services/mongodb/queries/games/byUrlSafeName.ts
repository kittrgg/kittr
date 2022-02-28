import { Game } from "@Services/mongodb/models"
import { IGame } from "@kittr/types/game"

interface IFunc {
	/**
	 * @params
	 * urlSafeName from mongodb for the game
	 *
	 * @returns
	 * Promise with the desired game
	 *
	 */
	(
		/** urlSafe name for the game */
		urlSafeName: string
	): Promise<IGame>
}

/**
 * SERVER SIDE ONLY!
 *
 * Get a game by its urlSafeName
 */
export const gameByUrlSafeNameQuery: IFunc = async (urlSafeName) => {
	const result = await Game.find({ urlSafeName }).lean<IGame[]>()
	if (result.length == 0) return [] as any

	const serialized = {
		...result[0],
		_id: result[0]._id.toString(),
		releaseDate: result[0].toString() as unknown as Date
	}
	return serialized
}
