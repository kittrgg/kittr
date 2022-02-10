import type { NextApiRequest, NextApiResponse } from "next"
import { createHandler } from "@Utils/middlewares/createHandler"
import { Promo } from "@Services/mongodb/models"
import { userAuth } from "@Middlewares/auth"

const handler = createHandler(userAuth)

// Create a new promo
handler.post(async (req: NextApiRequest, res: NextApiResponse) => {
	const { type, startTime, endTime, channelId } = JSON.parse(req.body)

	try {
		const newPromo = new Promo({
			type,
			startTime,
			endTime,
			channelId
		})

		const saveResult = await newPromo.save()

		return res.status(200).json(saveResult)
	} catch (error) {
		return res.status(400).json(error)
	}
})

export default handler
