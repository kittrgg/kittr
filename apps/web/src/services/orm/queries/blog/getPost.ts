import { BlogPost } from "@Services/orm/models"
import { IPost } from "@kittr/types/types"

interface IFunc {
	/**
	 * @params
	 * postSlug: Slug for the post.
	 *
	 * @returns
	 * Promise with array of posts.
	 *
	 */
	(slug: string): Promise<IPost>
}

/**
 * SERVER SIDE ONLY!
 *
 * Get a blog post from mongodb using its slug.
 */
export const getBlogPostQuery: IFunc = async (slug) => {
	const result = await BlogPost.find({ slug }).lean<Array<IPost>>()
	const serialized = { ...result[0], _id: result[0]._id.toString() }

	return serialized
}
