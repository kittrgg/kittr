import colors from "@Colors"
import { header2 } from "@Styles/typography"
import { Routes } from "@Utils/lookups/routes"
import Link from "next/link"
import { BlogItem } from "pages/blog/[pageNumber].page"
import styled from "styled-components"

interface Props {
	/** The three most recent posts on the kittr blog */
	posts: IPost[]
}

/** The three most recent posts to show on the home page */
const BlogSection = ({ posts }: Props) => {
	return (
		<section style={{ marginBottom: "12px" }}>
			<HeaderFlex>
				<H2>LATEST ON THE BLOG</H2>
				<Link href={Routes.BLOG.LIST} passHref>
					<StyledLink>SEE ALL</StyledLink>
				</Link>
			</HeaderFlex>
			<Grid>
				{posts.map((post) => {
					return <BlogItem key={post._id} {...post} span={1} />
				})}
			</Grid>
		</section>
	)
}

export default BlogSection

// Styled Components

const H2 = styled.h2`
	margin-right: 12px;
	margin-bottom: 36px;
	${header2};
`

const HeaderFlex = styled.div`
	display: flex;
	flex-direction: row;
	align-items: flex-start;
	justify-content: space-between;
	margin: 0 24px;
`

const StyledLink = styled.a`
	color: ${colors.white};
	font-weight: 600;
	font-size: 14px;
	letter-spacing: 2px;
	white-space: nowrap;
	cursor: pointer;
	text-decoration: none;
`

const Grid = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	gap: 20px;
	margin: 0 20px;

	@media (max-width: 1000px) {
		grid-template-columns: 1fr;
	}
`
