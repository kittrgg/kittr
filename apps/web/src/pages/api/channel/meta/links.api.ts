import { NextServerPayload } from "@kittr/types"
import type { NextApiRequest, NextApiResponse } from "next"
import { createHandler } from "@Middlewares/createHandler"
import { userAuth } from "@Utils/middlewares/auth"
import { LinkProperties, Channel, prisma } from "@kittr/prisma"

const handler = createHandler(userAuth)

// Edit channel's links
handler.put(async (req: NextApiRequest, res: NextApiResponse<NextServerPayload<Channel>>) => {
	const { id, links } = JSON.parse(req.body) as { id: string; links: Record<string, string> }

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
						data: Object.entries(links).map(([property, url]) => ({
							property: property.toUpperCase() as LinkProperties,
							value: url
						}))
					}
				}
			}
		})

		return res.status(200).json(result)
	} catch (error) {
		return res.status(400).json({ error: true, errorMessage: JSON.stringify(error) })
	}
})

export default handler
