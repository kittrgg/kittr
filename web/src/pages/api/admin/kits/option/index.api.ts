import type { NextApiRequest, NextApiResponse } from "next"
import { createHandler } from "@Utils/middlewares/createHandler"
import { adminAuth } from "@Utils/middlewares/auth"
import { KitOption } from "@Services/mongodb/models"

const handler = createHandler(adminAuth)

// Create a new kit option
handler.post(async (req: NextApiRequest, res: NextApiResponse) => {
	const newKitOption = new KitOption(req.body)

	await newKitOption.save({ new: true }, (errors: any, data: IKitOption) => {
		if (errors) return res.status(400).json(errors)
		return res.status(200).json(data)
	})
})

// Edit an existing kit option
handler.put(async (req: NextApiRequest, res: NextApiResponse) => {
	const { _id, ...rest } = req.body

	KitOption.findByIdAndUpdate(_id, { $set: rest }, { new: true }, (errors, data: IKitOption) => {
		if (errors) return res.status(400).json(errors)
		return res.status(200).json(data || {})
	})
})

// Delete a kit option
handler.delete(async (req: NextApiRequest, res: NextApiResponse) => {
	const { _id } = req.body

	KitOption.findByIdAndDelete(_id, null, (errors, data: IKitOption) => {
		if (errors) return res.status(400).json({ success: false, errors })
		if (!data) return res.status(200).json({})
		return res.status(200).json({ success: true })
	})
})

export default handler
