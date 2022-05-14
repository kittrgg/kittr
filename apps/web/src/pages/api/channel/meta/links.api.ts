import { NextServerPayload } from "@kittr/types"
import type { NextApiRequest, NextApiResponse } from "next"
import { createHandler } from "@Middlewares/createHandler"
import { userAuth } from "@Utils/middlewares/auth"
import { ChannelLink, Channel, prisma } from "@kittr/prisma"

const handler = createHandler(userAuth)

// Edit channel's links
handler.put(async (req: NextApiRequest, res: NextApiResponse<NextServerPayload<Channel>>) => {
	const { id, links } = JSON.parse(req.body) as { id: string; links: ChannelLink[] }

	try {
		// TODO: Turn this into a correctly done CRUD
		// For the time being, though...

		// Get all the existing link ids so I can map over them in the next step
		const existingLinkIds = await prisma.channel.findFirst({
			where: { id },
			select: {
				links: {
					select: {
						id: true
					}
				}
			}
		})

		// Delete all existing links
		await prisma.channel.update({
			where: { id },
			data: {
				links: {
					deleteMany: existingLinkIds?.links || []
				}
			}
		})

		// Then, bring in all the new ones.
		const result = await prisma.channel.update({
			where: { id },
			data: {
				links: {
					createMany: {
						data: links.map((link) => ({
							property: link.property,
							value: link.value
						}))
					}
				}
			}
		})

		return res.status(200).json(result)
	} catch (error) {
		console.log(error)

		return res.status(400).json({ error: true, errorMessage: JSON.stringify(error) })
	}
})

export default handler
