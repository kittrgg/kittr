import { NextServerPayload } from "@kittr/types"
import type { NextApiRequest, NextApiResponse } from "next"
import { createHandler } from "@Utils/middlewares/createHandler"
import { userAuth } from "@Middlewares/auth"
import { prisma, Kit, KitOption } from "@kittr/prisma"

interface KitWithOptions extends Kit {
	options: KitOption[]
}

const handler = createHandler(userAuth)

// Upsert a kit to a channel
handler.post(async (req: NextApiRequest, res: NextApiResponse<NextServerPayload<Kit>>) => {
	const { channelId, token, previousUpdater, kit } = JSON.parse(req.body) as {
		channelId: string
		token: any
		previousUpdater: string
		kit: KitWithOptions
	}

	try {
		const update = {
			kitBase: {
				connect: {
					id: kit.kitBaseId
				}
			},
			channel: {
				connect: {
					id: channelId
				}
			},
			game: {
				connect: {
					id: kit.gameId
				}
			},
			options: {
				connect: kit.options.map((opt) => ({
					id: opt.id
				}))
			},
			blueprint: kit.blueprint,
			featured: kit.featured,
			customTitle: kit.customTitle,
			quote: kit.quote,
			tiktokUrl: kit.tiktokUrl,
			youtubeUrl: kit.youtubeUrl
		}

		const data = await prisma.kit.upsert({
			where: { id: kit.id ?? "" },
			create: update,
			update: update
		})

		return res.status(200).json(data)
	} catch (err) {
		console.error(err)
		return res.status(500).json({ error: true, errorMessage: JSON.stringify(err) })
	}
})

// Delete a channel's kit
handler.delete(async (req: NextApiRequest, res: NextApiResponse<NextServerPayload<Kit | null>>) => {
	const { kitId } = JSON.parse(req.body)

	try {
		const result = await prisma.kit.delete({
			where: {
				id: kitId
			}
		})

		return res.status(200).json(result)
	} catch (error) {
		return res.status(400).json({ error: true, errorMessage: JSON.stringify(error) })
	}
})

export default handler
