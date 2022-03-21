import { prisma, BlogPost } from "@kittr/prisma"

interface Params {
	limit: number
	skip?: number
	order?: "asc" | "desc"
}

export const getBlogPostsQuery = async ({ limit, skip = 0, order = "desc" }: Params): Promise<BlogPost[]> => {
	const posts = await prisma.blogPost.findMany({
		orderBy: {
			createdAt: order
		},
		skip,
		take: limit
	})
	return posts
}
