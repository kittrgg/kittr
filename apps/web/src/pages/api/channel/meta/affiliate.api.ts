import validator from "validator"
import mongoose from "mongoose"
import type { NextApiRequest, NextApiResponse } from "next"
import { NextServerPayload } from "@kittr/types"
import { createHandler } from "@Middlewares/createHandler"
import Channel from "@Services/orm/models/Channel"
import { userAuth } from "@Middlewares/auth"
import { sanitize } from "@Services/orm/utils/sanitize"
import { ChannelModel } from "@Services/orm/models/Channel"

const handler = createHandler(userAuth)

// Set channel's affiliate
handler.post(async (req: NextApiRequest, res: NextApiResponse<NextServerPayload<ChannelModel | null>>) => {
	try {
		const { _id, company, description, code, link } = JSON.parse(req.body)

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
		return res.status(500).json({ error: true, errorMessage: JSON.stringify(error) })
	}
})

// Delete a channel's affiliate
handler.delete(async (req: NextApiRequest, res: NextApiResponse) => {
	try {
		const { _id, company } = JSON.parse(req.body)

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
