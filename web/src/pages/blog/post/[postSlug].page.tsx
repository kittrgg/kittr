import colors from "@Colors"
import AdPageWrapper, { H1 } from "@Components/layouts/AdPageWrapper"
import FallbackPage from "@Components/layouts/FallbackPage"
import Button from "@Components/shared/Button"
import { useViewportDimensions } from "@Hooks/useViewportDimensions"
import { getBlogPostQuery } from "@Services/mongodb"
import ResponsiveBanner from "@Services/venatus/ResponsiveBanner"
import { connectToDatabase } from "@Utils/helpers/connectToDatabase"
import { Routes } from "@Utils/lookups/routes"
import { GetStaticProps } from "next"
import { useRouter } from "next/router"
import ReactMarkdown from "react-markdown"
import styled from "styled-components"

interface Props {
	post: IPost
}

const PostSlug = ({ post }: Props) => {
	const { width } = useViewportDimensions()
	const router = useRouter()

	if (router.isFallback) return <FallbackPage />

	return (
		<AdPageWrapper title={`Blog Article - ${post.title} | kittr`} description="Thanks for reading. Love, kittr.">
			{width < 1200 && <ResponsiveBanner />}
			<H1>BLOG</H1>
			<Button
				design="transparent"
				text="BACK TO ARTICLES"
				onClick={() => router.push(Routes.BLOG.createBlogDirPath("1"))}
				style={{ margin: "36px auto" }}
			/>

			<Container>
				<Title>{post.title.toUpperCase()}</Title>
				<Subline>
					{post.datePublished} | {post.author}
				</Subline>
				<MarkdownContainer>
					<ReactMarkdown>{post.markdown}</ReactMarkdown>
				</MarkdownContainer>
			</Container>

			<Button
				design="transparent"
				text="BACK TO ARTICLES"
				onClick={() => router.push(Routes.BLOG.createBlogDirPath("1"))}
				style={{ margin: "36px auto 0" }}
			/>
			{width < 1200 && <ResponsiveBanner largeWidthAdUnit="d728x90" smallWidthAdUnit="s300x250" />}
		</AdPageWrapper>
	)
}

export const getStaticPaths = async () => {
	return {
		paths: [],
		fallback: true
	}
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const { postSlug } = params as { postSlug: string }
	await connectToDatabase()

	return {
		props: {
			post: await getBlogPostQuery(postSlug)
		},
		revalidate: 60
	}
}

export default PostSlug

// Styled Components

const Container = styled.div`
	margin: 0 5%;
	padding: 54px 5%;
	background-color: ${colors.dark20};
	border-radius: 20px;
`

const Title = styled.div`
	margin-bottom: 32px;
	font-family: "Barlow Condensed", serif;
	font-size: 36px;
	font-weight: 900;
	letter-spacing: 2px;
	text-align: center;
`

const Subline = styled.p`
	margin-bottom: 24px;
	font-size: 18px;
	color: ${colors.lightest};
	letter-spacing: 2px;
	text-align: center;
`

const MarkdownContainer = styled.div`
	color: ${colors.white};
	font-size: 18px;
	letter-spacing: 2px;

	@media (max-width: 500px) {
		font-size: 16px;
	}

	h1 {
		margin: 19px 0;
		color: ${colors.white};
		font-weight: 600;
		font-size: 22px;
	}

	h2 {
		margin: 19px 0;
		color: ${colors.white};
		font-size: 22px;
	}

	h3 {
		margin: 19px 0;
		color: ${colors.white};
		font-family: "Barlow Condensed", serif;
		font-size: 28px;
		font-weight: 900;
	}

	h4 {
		color: ${colors.white};
		font-family: "Barlow Condensed", serif;
		font-size: 18px;
	}

	h5 {
		color: ${colors.white};
		font-weight: 700;
	}

	h6 {
		color: ${colors.white};
	}

	p {
		margin: 19px 0;
		line-height: 150%;
	}

	ul {
		list-style: disc;
		margin-left: 24px;

		li {
			margin-top: 19px;
		}
	}

	ol {
		list-style: decimal;
		margin-left: 24px;

		li {
			margin-top: 19px;
		}
	}

	img {
		display: block;
		margin: 19px auto;
		min-width: 250px;
		max-width: 50%;
		border-radius: 20px;
	}

	a {
		color: ${colors.white};
	}
`
