import type { NextApiRequest, NextApiResponse } from "next"
import { createHandler } from "@Utils/middlewares/createHandler"
import { adminAuth } from "@Utils/middlewares/auth"
import KitOption, { KitOptionModel } from "@Services/mongodb/models/KitOption"

const handler = createHandler(adminAuth)

// Create a new kit option
// @ts-ignore
handler.post(async (req: NextApiRequest, res: NextApiResponse<NextServerPayload<KitOptionModel | null>>) => {
	try {
		const newKitOption = new KitOption(req.body)
		const option = await newKitOption.save()
		return res.status(200).json(option)
	} catch (error) {
		return res.status(400).json({ error: true, errorMessage: JSON.stringify(error) })
	}
})

// Edit an existing kit option
// @ts-ignore
handler.put(async (req: NextApiRequest, res: NextApiResponse<NextServerPayload<KitOptionModel | null>>) => {
	const { _id, ...rest } = req.body

	try {
		const data = await KitOption.findByIdAndUpdate(_id, { $set: rest }, { new: true })
		return res.status(200).json(data)
	} catch (error) {
		return res.status(400).json({ error: true, errorMessage: JSON.stringify(error) })
	}
})

// Delete a kit option
// @ts-ignore
handler.delete(async (req: NextApiRequest, res: NextApiResponse<NextServerPayload<KitOptionModel | null>>) => {
	const { _id } = req.body

	try {
		const data = await KitOption.findByIdAndDelete(_id)
		return res.status(200).json(data)
	} catch (error) {
		return res.status(400).json({ error: true, errorMessage: JSON.stringify(error) })
	}
})

export default handler
