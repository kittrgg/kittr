import { BlogPost } from "@Services/mongodb/models"

interface IFunc {
	/**
	 * @params
	 * limit: How many blog posts do you want?
	 *
	 * skip: Optional. Skip first n results.
	 *
	 * order: Posts are always sorted by date. ASC for ascending, DESC for descending. Defaults to DESC.
	 *
	 * @returns
	 * Promise with array of posts.
	 *
	 */
	(params: {
		/** How many blog posts do you want? */
		limit: number
		/** Optional. Skip first n results. */
		skip?: number
		/** Posts are always sorted by date. ASC for ascending, DESC for descending. Defaults to DESC. */
		order?: "DESC" | "ASC"
	}): Promise<IPost[]>
}

/**
 * SERVER SIDE ONLY!
 *
 * Get several blog posts from the database. Options for limit, skip, and order.
 */
export const getBlogPostsQuery: IFunc = async ({ limit, skip = 0, order = "DESC" }) => {
	const sortOrder = order === "ASC" ? 1 : -1

	const result = await BlogPost.aggregate<IPost>([
		{
			$addFields: {
				datePublished: {
					$dateFromString: {
						dateString: "$datePublished",
						format: "%m-%d-%Y"
					}
				}
			}
		},
		{
			$sort: { datePublished: sortOrder }
		},
		{
			$skip: skip
		},
		{
			$limit: limit
		}
	])

	const serialized = result.map((post) => ({
		...post,
		_id: post._id.toString(),
		datePublished: post.datePublished.toString().slice(4, 15)
	}))

	return serialized
}
