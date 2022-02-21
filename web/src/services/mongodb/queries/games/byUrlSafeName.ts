import { Game } from "@Services/mongodb/models"

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
	console.log("Starting gameByUrlSafeNameQuery...")
	const result = await Game.find({ urlSafeName }).lean<IGame[]>()
	if (result.length == 0) return [] as any

	const serialized = {
		...result[0],
		_id: result[0]._id.toString(),
		releaseDate: result[0].toString() as unknown as Date
	}
	console.log("Finishing gameByUrlSafeNameQuery...")
	return serialized
}
