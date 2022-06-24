import { NextServerPayload } from "@kittr/types"
import KitBase, { KitBaseModel } from "@Services/mongodb/models/KitBase"
import { adminAuth } from "@Utils/middlewares/auth"
import { createHandler } from "@Utils/middlewares/createHandler"
import type { NextApiRequest, NextApiResponse } from "next"

const handler = createHandler(adminAuth)

// Create a new kit base
handler.post(async (req: NextApiRequest, res: NextApiResponse<NextServerPayload<KitBaseModel>>) => {
	const newKitBase = new KitBase(req.body)

	try {
		const base = await newKitBase.save()

		return res.status(200).json(base)
	} catch (error) {
		return res.status(400).json({ error: true, errorMessage: JSON.stringify(error) })
	}
})

// Edit an existing kit base
handler.put(async (req: NextApiRequest, res: NextApiResponse<NextServerPayload<KitBaseModel | null>>) => {
	const { _id, ...rest } = req.body

	try {
		const base = await KitBase.findByIdAndUpdate(_id, { $set: rest }, { new: true })
		return res.status(200).json(base)
	} catch (error) {
		return res.status(400).json({ error: true, errorMessage: JSON.stringify(error) })
	}
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
