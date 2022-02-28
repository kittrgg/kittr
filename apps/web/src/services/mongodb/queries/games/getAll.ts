import { Game } from "@Services/mongodb/models"
import { IGame } from "@kittr/types/game"

interface IFunc {
	/**
	 * @returns
	 * Promise with array of games
	 */
	(): Promise<IGame[]>
}

/**
 * SERVER SIDE ONLY!
 *
 * Get all the games on the platform. */
export const allGamesQuery: IFunc = async () => {
	const result = await Game.find({}).lean<IGame[]>()

	const serialized = result.map((elem) => ({
		...elem,
		_id: elem._id.toString(),
		releaseDate: elem.releaseDate.toString() as unknown as Date
	}))

	return serialized
}
