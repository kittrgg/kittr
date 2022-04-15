import validator from "validator"
import type { NextApiRequest, NextApiResponse } from "next"
import { NextServerPayload } from "@kittr/types"
import { createHandler } from "@Middlewares/createHandler"
import { userAuth } from "@Middlewares/auth"
import { prisma, Channel } from "@kittr/prisma"

const handler = createHandler(userAuth)

// Set channel's affiliate
handler.post(async (req: NextApiRequest, res: NextApiResponse<NextServerPayload<Channel>>) => {
	try {
		// Upsert an affiliate for a channel
		const { channelId, company, description, code, url } = JSON.parse(req.body) as {
			channelId: string
			affiliateId: string
			company: string
			description?: string
			code?: string
			url?: string
		}
		console.log({ url })

		if (url) {
			if (!validator.isURL(url)) return res.status(400).json({ error: true, errorMessage: "Invalid URL" })
		}

		// TODO: Need input validation
		const affiliateUpdate = {
			company,
			description,
			code,
			url
		}

		const result = await prisma.channel.update({
			where: { id: channelId },
			data: {
				profile: {
					update: {
						affiliates: {
							create: affiliateUpdate
						}
					}
				}
			}
		})
		return res.status(200).json(result)
	} catch (err) {
		console.log(err)
		return res.status(500).json({ error: true, errorMessage: JSON.stringify(err) })
	}
})

handler.put(async (req: NextApiRequest, res: NextApiResponse<NextServerPayload<Channel>>) => {
	try {
		// Upsert an affiliate for a channel
		const { channelId, affiliateId, company, description, code, url } = JSON.parse(req.body) as {
			channelId: string
			affiliateId: string
			company: string
			description?: string
			code?: string
			url?: string
		}

		if (url) {
			if (!validator.isURL(url)) return res.status(400).json({ error: true, errorMessage: "Invalid URL" })
		}

		// TODO: Need input validation
		const affiliateUpdate = {
			company,
			description,
			code,
			url
		}

		const result = await prisma.channel.update({
			where: { id: channelId },
			data: {
				profile: {
					update: {
						affiliates: {
							update: {
								where: {
									id: affiliateId
								},
								data: affiliateUpdate
							}
						}
					}
				}
			}
		})
		return res.status(200).json(result)
	} catch (err) {
		console.log(err)
		return res.status(500).json({ error: true, errorMessage: JSON.stringify(err) })
	}
})
// Delete a channel's affiliate
handler.delete(async (req: NextApiRequest, res: NextApiResponse) => {
	try {
		const { channelId, affiliateId } = JSON.parse(req.body)
		const result = await prisma.channel.update({
			where: { id: channelId },
			data: {
				profile: {
					update: {
						affiliates: {
							delete: {
								id: affiliateId
							}
						}
					}
				}
			}
		})

		return res.status(200).json(result)
	} catch (error) {
		console.log(error)
		return res.status(500).json({ isError: true, error })
	}
})

export default handler
