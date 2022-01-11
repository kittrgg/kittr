import type { NextApiRequest, NextApiResponse } from "next"
import { createHandler } from "@Utils/middlewares/createHandler"
import { adminAuth } from "@Utils/middlewares/auth"
import { KitBase } from "@Services/mongodb/models"

const handler = createHandler(adminAuth)

// Create a new kit base
handler.post(async (req: NextApiRequest, res: NextApiResponse) => {
	const newKitBase = new KitBase(req.body)

	await newKitBase.save({ new: true }, (errors: any, data: any) => {
		if (errors) return res.status(400).json(errors)
		return res.status(200).json(data)
	})
})

// Edit an existing kit base
handler.put(async (req: NextApiRequest, res: NextApiResponse) => {
	const { _id, ...rest } = req.body

	KitBase.findByIdAndUpdate(_id, { $set: rest }, { new: true }, (errors, data: IKitBase) => {
		if (errors) return res.status(400).json(errors)
		return res.status(200).json(data || {})
	})
})

// Delete a kit base
handler.delete(async (req: NextApiRequest, res: NextApiResponse) => {
	const { _id } = req.body

	KitBase.findByIdAndDelete(_id, null, (error, data: any) => {
		if (error) return res.status(400).json({ success: false, error })
		if (!data) return res.status(200).json({})
		return res.status(200).json({ success: true })
	})
})

export default handler
