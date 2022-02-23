import { KitOption } from "@Services/mongodb/models"

interface IFunc {
	/**
	 * @returns
	 * Promise with array of games
	 */
	(): Promise<IKitOption[]>
}

/**
 * SERVER SIDE ONLY!
 *
 * Get all the games on the platform. */
export const allOptionsQuery: IFunc = async () => {
	const result = await KitOption.find({}).lean<IKitOption[]>()

	const serialized = result.map((elem) => ({
		...elem,
		_id: elem._id.toString()
	}))

	return serialized
}
