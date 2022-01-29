import { Channel } from "@Services/mongodb/models"

interface ITotalKits {
	/**
	 * @returns
	 * Number of kits that are on the platform
	 */
	(): Promise<number>
}

/**
 *  SERVER SIDE ONLY!
 *
 * Get the total amount of kits on the platform. */
export const totalKitsQuery: ITotalKits = async () => {
	const result = await Channel.aggregate([
		{
			$group: {
				_id: null,
				total: {
					$sum: {
						$size: "$kits"
					}
				}
			}
		}
	])

	return result[0].total
}
