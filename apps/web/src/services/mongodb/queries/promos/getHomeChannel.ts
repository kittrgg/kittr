import { Promo } from "@Services/mongodb/models/Promo"
import { logError } from "@kittr/logger/nextjs"

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
