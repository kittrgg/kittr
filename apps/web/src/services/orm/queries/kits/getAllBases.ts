import { KitBase } from "@Services/orm/models"
import { IKitBase } from "@kittr/types/kits"

interface IFunc {
	/**
	 * @returns
	 * Promise with array of games
	 */
	(): Promise<IKitBase[]>
}

/**
 * SERVER SIDE ONLY!
 *
 * Get all the games on the platform. */
export const allBasesQuery: IFunc = async () => {
	const result = await KitBase.find({}).lean<IKitBase[]>()

	const serialized = result.map((elem) => ({
		...elem,
		_id: elem._id.toString(),
		gameId: elem.gameId.toString()
	}))

	return serialized
}
