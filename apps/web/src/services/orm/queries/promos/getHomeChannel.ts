import { Promo } from "@Services/orm/models/Promo"
import { logError } from "@kittr/logger/nextjs"
import { IPromo } from "@kittr/types/types"

export const getHomeChannelPromo = async () => {
	const rightNow = new Date().getTime()

	const result = await Promo.aggregate<IPromo>([
		{
			$match: {
				type: "homeChannel",
				startTime: {
					$lt: rightNow
				},
				endTime: {
					$gt: rightNow
				}
			}
		}
	])

	if (result.length === 0) {
		return null
	}

	if (result.length > 1) {
		logError("Multiple home channel promos found")
	}

	return result[0]
}
