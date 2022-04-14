import type { NextApiRequest, NextApiResponse } from "next"
import { NextServerPayload } from "@kittr/types"
import { createHandler } from "@Utils/middlewares/createHandler"
import { userAuth } from "@Utils/middlewares/auth"
import { getDashboardChannel, getDashboardChannelReturnType } from "@Services/orm/queries/channels/getDashboardChannel"

const handler = createHandler(userAuth)

// Get a full channel profile
handler.get(
	async (req: NextApiRequest, res: NextApiResponse<NextServerPayload<getDashboardChannelReturnType | null>>) => {
		const { id, urlSafeName } = req.query as { id: string; urlSafeName: string }

		const channel = await getDashboardChannel({ id, urlSafeName })

		return res.status(200).json(channel)
	}
)

export default handler
