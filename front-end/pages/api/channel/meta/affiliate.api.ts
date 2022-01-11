import validator from "validator"
import mongoose from "mongoose"
import type { NextApiRequest, NextApiResponse } from "next"
import { createHandler } from "@Middlewares/createHandler"
import Channel from "@Services/mongodb/models/Channel"
import { userAuth } from "@Middlewares/auth"
import { sanitize } from "@Services/mongodb/utils/sanitize"

const handler = createHandler(userAuth)

// Set channel's affiliate
handler.post(async (req: NextApiRequest, res: NextApiResponse) => {
	try {
		const { _id, company, description, code, link } = req.body

		const data = await Channel.findByIdAndUpdate(
			{
				_id: new mongoose.Types.ObjectId(sanitize(_id))
			},
			{
				$set: {
					[`meta.affiliates.${company.replace(/[^\w\s-]/g, "")}`]: {
						code: sanitize(code) || "",
						description: sanitize(description) || "",
						link: validator.isURL(link) ? sanitize(link) || "" : ""
					}
				}
			},
			{ new: true }
		)

		return res.status(200).json(data)
	} catch (error) {
		console.log(error)
		return res.status(500).json({ isError: true, error })
	}
})

// Delete a channel's affiliate
handler.delete(async (req: NextApiRequest, res: NextApiResponse) => {
	try {
		const { _id, company } = req.body

		const data = await Channel.findByIdAndUpdate(
			{
				_id: new mongoose.Types.ObjectId(sanitize(_id))
			},
			{
				$unset: { [`meta.affiliates.${company.replace(/[^\w\s-]/g, "")}`]: 1 }
			},
			{ new: true }
		)

		return res.status(200).json(data)
	} catch (error) {
		console.log(error)
		return res.status(500).json({ isError: true, error })
	}
})

export default handler
