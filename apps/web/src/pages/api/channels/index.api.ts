import { NextServerPayload } from "@kittr/types"
import type { NextApiRequest, NextApiResponse } from "next"
import { createHandler } from "@Middlewares/createHandler"
import { toURL } from "@Utils/helpers/toURL"
import { badWordFilter } from "@Utils/helpers/badWordFilter"
import { prisma, Channel } from "@kittr/prisma"

const handler = createHandler()

handler.post(async (req: NextApiRequest, res: NextApiResponse<NextServerPayload<Channel>>) => {
	const { displayName, userId } = req.body

	try {
		if (displayName.length > 26)
			return res.status(400).json({ error: true, errorMessage: "That name is too long. 25 characters or less" })

		if (badWordFilter(displayName)) {
			return res.status(400).json({ error: true, errorMessage: "Hey, no bad words!" })
		}

		const existingChannel = await prisma.channel.findFirst({
			where: { urlSafeName: toURL(displayName) }
		})

		if (existingChannel) {
			return res.status(403).json({
				error: true,
				errorMessage:
					"That name is too similar to another channel. We don't want to confuse our system...Please choose another."
			})
		}

		const result = await prisma.channel.create({
			data: {
				displayName,
				urlSafeName: toURL(displayName),
				managers: {
					create: {
						firebaseId: userId,
						// NO TOUCHY! We need to make sure that the person who creates this channel is the owner of it.
						role: "OWNER"
					}
				}
			}
		})

		return res.status(200).json(result)
	} catch (error) {
		return res.status(500).send({
			error: true,
			errorMessage: "We messed up. Error Code 4923"
		})
	}
})

export default handler
