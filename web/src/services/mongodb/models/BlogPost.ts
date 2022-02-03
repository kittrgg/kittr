import mongoose, { Schema } from "mongoose"

const MODEL_NAME = "blogPost"

const schema = new Schema(
	{
		author: String,
		datePublished: String,
		title: String,
		slug: String,
		markdown: String
	},
	{ minimize: false }
)

const BlogPost = mongoose.model(MODEL_NAME, schema)

export default BlogPost
