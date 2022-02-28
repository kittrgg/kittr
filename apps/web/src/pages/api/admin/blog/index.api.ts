import type { NextApiRequest, NextApiResponse } from "next"
import { NextServerPayload } from "@kittr/types"
import { createHandler } from "@Utils/middlewares/createHandler"
import { adminAuth } from "@Utils/middlewares/auth"
import mongoose from "mongoose"
import { BlogPost } from "@Services/mongodb/models"
import { BlogPostModel } from "@Services/mongodb/models/BlogPost"
import { toURL } from "@Utils/helpers/toURL"

const handler = createHandler(adminAuth)

// Create a blog post
handler.post(async (req: NextApiRequest, res: NextApiResponse<NextServerPayload<BlogPostModel>>) => {
	const { author, datePublished, title, markdown } = JSON.parse(req.body)

	const newPost = new BlogPost({
		author,
		datePublished,
		title,
		markdown,
		slug: toURL(datePublished + "-" + title)
	})

	try {
		const save = await newPost.save()
		return res.status(200).json(save)
	} catch (error) {
		return res.status(400).json({ error: true, errorMessage: JSON.stringify(error) })
	}
})

// Edit a blog post
// This route is untested
handler.put(async (req: NextApiRequest, res: NextApiResponse<NextServerPayload<BlogPostModel | null>>) => {
	const { _id, ...rest } = JSON.parse(req.body)

	try {
		const update = await BlogPost.findOneAndUpdate(
			{ _id: new mongoose.Types.ObjectId(_id) },
			{ $set: rest },
			{ new: true }
		)

		return res.status(200).json(update)
	} catch (error) {
		if (error) return res.status(400).json({ error: true, errorMessage: JSON.stringify(error) })
	}
})

export default handler
