import type { NextApiRequest, NextApiResponse } from "next"
import { createHandler } from "@Utils/middlewares/createHandler"
import { userAuth } from "@Utils/middlewares/auth"
import { getManagerChannels } from "@Services/orm"

const handler = createHandler(userAuth)

// Get all channels that user is a manager for.
handler.get(async (req: NextApiRequest, res: NextApiResponse) => {
	const { uid } = JSON.parse(req.body).token as { uid: string }

	try {
		const result = await getManagerChannels({ uid })

		return res.status(200).json(result)
	} catch (error) {
		return res.status(400).json(error)
	}
})

export default handler
