import { Promo } from "@Services/mongodb/models/Promo"
import { nextLogger } from "@kittr/logger"

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
		nextLogger.logError("Multiple home channel promos found")
	}

	return result[0]
}
