import type { NextApiRequest, NextApiResponse } from "next"
import { NextServerPayload } from "@kittr/types"
import { createHandler } from "@Middlewares/createHandler"
import { userAuth } from "@Middlewares/auth"
import { toURL } from "@Utils/helpers/toURL"
import { prisma, Channel } from "@kittr/prisma"

const handler = createHandler(userAuth)

// Edit channel's displayName
handler.put(async (req: NextApiRequest, res: NextApiResponse<NextServerPayload<Channel>>) => {
	const { id, value } = JSON.parse(req.body)
	try {
		const result = await prisma.channel.update({
			where: { id },
			data: {
				displayName: value,
				urlSafeName: toURL(value)
			}
		})

		return res.status(200).json(result)
	} catch (error) {
		return res.status(400).json({
			error: true,
			errorMessage:
				"That gamertag is too similar to another channel. We don't want to confuse our system...Please choose another."
		})
	}
})

export default handler
