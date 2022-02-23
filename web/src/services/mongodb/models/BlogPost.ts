import mongoose, { Schema, Model } from "mongoose"

const MODEL_NAME = "blogPost"

export interface BlogPostModel {
	author: string
	datePublished: string
	title: string
	slug: string
	markdown: string
}

const schema = new Schema<BlogPostModel>(
	{
		author: String,
		datePublished: String,
		title: String,
		slug: String,
		markdown: String
	},
	{ minimize: false }
)

export const BlogPost =
	(mongoose.models[MODEL_NAME] as Model<BlogPostModel, {}, {}, {}>) || mongoose.model<BlogPostModel>(MODEL_NAME, schema)

export default BlogPost
