import type { NextApiRequest, NextApiResponse } from "next"
import { createHandler } from "@Utils/middlewares/createHandler"
import { gameByUrlSafeNameQuery, gameByUrlSafeNameQueryReturnType } from "@Services/orm/queries/games/byUrlSafeName"
import { NextServerPayload } from "@kittr/types"

const handler = createHandler()

// Fetch games on kittr
handler.get(async (req: NextApiRequest, res: NextApiResponse<NextServerPayload<gameByUrlSafeNameQueryReturnType>>) => {
	const { urlSafeName } = req.query as { urlSafeName: string }

	try {
		const data = await gameByUrlSafeNameQuery({ urlSafeName })

		return res.status(200).json(data)
	} catch (error) {
		return res.status(400).json({ error: true, errorMessage: JSON.stringify(error) })
	}
})

export default handler
