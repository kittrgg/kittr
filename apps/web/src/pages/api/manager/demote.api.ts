import { NextServerPayload } from "@kittr/types/types"
import type { NextApiRequest, NextApiResponse } from "next"
import { createHandler } from "@Utils/middlewares/createHandler"
import { userAuth } from "@Utils/middlewares/auth"
import { prisma, ChannelManager } from "@kittr/prisma"

const handler = createHandler(userAuth)

// Promote a manager in a channel
handler.put(async (req: NextApiRequest, res: NextApiResponse<NextServerPayload<ChannelManager>>) => {
	const { managerIdToUpdate, channelId, token } = JSON.parse(req.body)

	try {
		// Can this user perform this action?
		// Check their token for their uid and see if that uid is an owner or admin on this channel
		const manager = await prisma.channelManager.findFirst({
			where: {
				channelId,
				firebaseId: token.uid,
				role: "OWNER" || "ADMIN"
			}
		})

		if (!manager) {
			return res
				.status(404)
				.json({ error: true, errorMessage: "You do not have permission to perform this action on this channel." })
		}

		const update = await prisma.channelManager.update({
			where: {
				id: managerIdToUpdate
			},
			data: {
				role: "EDITOR"
			}
		})

		return res.status(200).json(update)
	} catch (error) {
		console.log(error)
		return res.status(500).json({
			error: true,
			errorMessage: "We did something wrong. Error Code 7455"
		})
	}
})

export default handler
