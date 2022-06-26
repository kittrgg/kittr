import { prisma, WarzoneKit, WarzoneKitOption } from "@kittr/prisma"
import { NextServerPayload } from "@kittr/types"
import { userAuth } from "@Middlewares/auth"
import { createHandler } from "@Utils/middlewares/createHandler"
import type { NextApiRequest, NextApiResponse } from "next"

interface KitWithOptions extends WarzoneKit {
	options: WarzoneKitOption[]
}

const handler = createHandler(userAuth)

// Upsert a kit to a channel
handler.post(async (req: NextApiRequest, res: NextApiResponse<NextServerPayload<WarzoneKit>>) => {
	const { channelId, token, previousUpdater, kit } = JSON.parse(req.body) as {
		channelId: string
		token: any
		previousUpdater: string
		kit: KitWithOptions
	}

	try {
		const update = {
			base: {
				connect: {
					id: kit.baseId
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

		const data = await prisma.warzoneKit.upsert({
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
handler.delete(async (req: NextApiRequest, res: NextApiResponse<NextServerPayload<WarzoneKit | null>>) => {
	const { kitId } = JSON.parse(req.body)

	try {
		const result = await prisma.warzoneKit.delete({
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
