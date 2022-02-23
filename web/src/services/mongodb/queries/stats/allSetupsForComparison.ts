import { Channel } from "@Services/mongodb/models"
import mongoose from "mongoose"

interface IFunction {
	/**
	 * @returns
	 * Promise containing setups across the platform separated by the _id of the Kit Base.
	 *
	 */
	(): Promise<
		Array<{
			_id: string
			matches: Array<string[]>
		}>
	>
}

/**
 * SERVER SIDE ONLY!
 *
 * Get groupings for all of the different setups availabe on a kit. This will get compared on the front-end.
 */
export const allSetupsForComparisonQuery: IFunction = async () => {
	const result = await Channel.aggregate([
		{
			$unwind: {
				path: "$kits"
			}
		},
		{
			$group: {
				_id: null,
				kits: {
					$push: "$kits"
				}
			}
		},
		{
			$unwind: {
				path: "$kits"
			}
		},
		{
			$group: {
				_id: "$kits.baseId",
				matches: {
					$push: "$kits.options"
				}
			}
		}
	])

	const serialized = result.map((channel: { _id: string; matches: Array<Array<mongoose.Types.ObjectId>> }) => {
		return {
			...channel,
			matches: channel.matches.map((match) => {
				return match.map((option) => {
					return option.toString()
				})
			})
		}
	})

	return serialized
}
