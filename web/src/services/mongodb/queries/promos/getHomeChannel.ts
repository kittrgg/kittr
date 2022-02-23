import { Promo } from "@Services/mongodb/models/Promo"
import { logger } from "@Services/sentry"

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
		logger.log({ message: "Multiple home channel promos found" })
	}

	return result[0]
}
