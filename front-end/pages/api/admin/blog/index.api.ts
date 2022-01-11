import type { NextApiRequest, NextApiResponse } from "next"
import { createHandler } from "@Utils/middlewares/createHandler"
import { adminAuth } from "@Utils/middlewares/auth"
import mongoose from "mongoose"
import { BlogPost } from "@Services/mongodb/models"
import { toURL } from "@Utils/helpers/toURL"

const handler = createHandler(adminAuth)

// Create a blog post
handler.post(async (req: NextApiRequest, res: NextApiResponse) => {
	const { author, datePublished, title, markdown } = JSON.parse(req.body)

	const newPost = await new BlogPost({
		author,
		datePublished,
		title,
		markdown,
		slug: toURL(datePublished + "-" + title)
	})

	await newPost.save((errors: any, data: IPost) => {
		if (errors) return res.status(400).json(errors)
		return res.status(200).json(data)
	})
})

// Edit a blog post
// This route is untested
handler.put(async (req: NextApiRequest, res: NextApiResponse) => {
	const { _id, ...rest } = JSON.parse(req.body)

	await BlogPost.findOneAndUpdate(
		{ _id: new mongoose.Types.ObjectId(_id) },
		{ $set: rest },
		{ new: true },
		(errors, data: IPost) => {
			if (errors) return res.status(400).json(errors)
			return res.status(200).json(data)
		}
	)
})

export default handler
