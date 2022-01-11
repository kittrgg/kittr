import colors from "@Colors"
import AdPageWrapper, { H1 } from "@Components/layouts/AdPageWrapper"
import FallbackPage from "@Components/layouts/FallbackPage"
import Paginator from "@Components/shared/Paginator"
import { useViewportDimensions } from "@Hooks/useViewportDimensions"
import { getBlogPostsQuery } from "@Services/mongodb"
import { BlogPost } from "@Services/mongodb/models"
import ResponsiveBanner from "@Services/venatus/ResponsiveBanner"
import { connectToDatabase } from "@Utils/helpers/connectToDatabase"
import { Routes } from "@Utils/lookups/routes"
import { GetStaticProps } from "next"
import Link from "next/link"
import { useRouter } from "next/router"
import ReactMarkdown from "react-markdown"
import styled from "styled-components"

const postsPerPage = 10

export const BlogItem = (props: IPost & { span: number }) => {
	return (
		<Link href={Routes.BLOG.createBlogPostPath(props.slug)} passHref>
			<GridItem span={props.span}>
				<Date>{props.datePublished}</Date>
				<Title>{props.title.toUpperCase()}</Title>
				<MarkdownContainer>
					<ReactMarkdown disallowedElements={["h1"]}>{props.markdown?.slice(0, 250).concat("...")}</ReactMarkdown>
				</MarkdownContainer>
			</GridItem>
		</Link>
	)
}

interface IBlogProps {
	posts: Array<IPost>
	totalPosts: number
	numberOfPages: number
}

const Blog = ({ posts, totalPosts, numberOfPages }: IBlogProps) => {
	const { width } = useViewportDimensions()
	const {
		isFallback,
		query: { pageNumber }
	} = useRouter()
	if (isFallback) return <FallbackPage />

	const page = Number(pageNumber)

	if (posts.length === 0 || isNaN(page)) {
		return (
			<AdPageWrapper title={`Blog - Page ${page} | kittr`} description="Welcome to the kittr blog.">
				<H1>BLOG</H1>
				<Paragraph>Oops, doesn't look like there are any posts here.</Paragraph>
				<Link href={Routes.BLOG.LIST}>
					<a
						style={{
							display: "block",
							marginTop: "24px",
							marginLeft: "24px",
							color: colors.white
						}}
					>
						Back to Earth
					</a>
				</Link>
			</AdPageWrapper>
		)
	}

	return (
		<AdPageWrapper title={`Blog - Page ${page} | kittr`} description="Welcome to the kittr blog.">
			{width < 1200 && <ResponsiveBanner />}
			<H1>BLOG</H1>
			<Grid>
				{posts.slice(0, 3).map((post) => {
					return <BlogItem key={post._id} {...post} span={1} />
				})}
				{posts.slice(3).map((post) => {
					return <BlogItem key={post._id} {...post} span={3} />
				})}
			</Grid>
			<Paginator
				totalResults={totalPosts}
				currentPageResultStart={(page - 1) * 10 + 1}
				currentPageResultEnd={page * 10 + 1}
				isFirstPage={page === 1}
				isLastPage={page === numberOfPages}
				currentPage={page}
				pageRoot={Routes.BLOG.LIST}
			/>
			{width < 1200 && <ResponsiveBanner largeWidthAdUnit="d728x90" smallWidthAdUnit="s300x250" />}
		</AdPageWrapper>
	)
}

export const getStaticPaths = async () => {
	const paths = new Array(3).map((_, index: number) => ({
		params: {
			pageNumber: String(index + 2)
		}
	}))

	return {
		paths,
		fallback: true
	}
}

export const getStaticProps: GetStaticProps = async ({ params }: any) => {
	await connectToDatabase()
	const allPosts = await BlogPost.find().lean()

	const totalPosts = allPosts.length
	const numberOfPages = Math.ceil(allPosts.length / postsPerPage)

	return {
		props: {
			posts: await getBlogPostsQuery({
				limit: postsPerPage,
				skip: Number(Number(params.pageNumber) - 1) * postsPerPage
			}),
			totalPosts,
			numberOfPages
		},
		revalidate: 60
	}
}

export default Blog

// Styled Components

const Grid = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	gap: 20px;
	margin: 0 20px;

	@media (max-width: 1000px) {
		grid-template-columns: 1fr;
	}
`

const GridItem = styled.a<{ span: number }>`
	padding: 36px;
	grid-column: ${(props) => "span " + props.span};
	border-radius: 20px;
	background-color: ${colors.dark20};
	cursor: pointer;
	text-decoration: none;

	&:hover {
		filter: invert(0.8);
	}

	@media (max-width: 1000px) {
		grid-column: 1;
	}
`

const Date = styled.p`
	margin-bottom: 24px;
	font-size: 14px;
	color: ${colors.lightest};
	letter-spacing: 2px;
`

const Title = styled.h2`
	margin-bottom: 24px;
	font-family: "Barlow Condensed", sans-serif;
	font-weight: 600;
	font-size: 24px;
	letter-spacing: 2px;
	color: ${colors.white};
`

const MarkdownContainer = styled.div`
	color: ${colors.lightest};
	font-size: 18px;
	letter-spacing: 2px;
`

const Paragraph = styled.p`
	margin-top: 24px;
	margin-left: 24px;
	padding-right: 24px;
	color: ${colors.lightest};
	font-family: "Montserrat", serif;
`
