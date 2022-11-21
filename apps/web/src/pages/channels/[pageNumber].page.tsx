import colors from "@Colors"
import AdPageWrapper, { H1 } from "@Components/layouts/AdPageWrapper"
import FallbackPage from "@Components/layouts/FallbackPage"
import { ChannelList, Paginator } from "@Components/shared"
import { useViewportDimensions } from "@Hooks/useViewportDimensions"
import { trpc } from "@Server/createHooks"
import { createSSGHelper } from "@Server/createSSGHelper"
import ResponsiveBanner from "@Services/venatus/ResponsiveBanner"
import { Routes } from "@Utils/lookups/routes"
import Link from "next/link"
import { useRouter } from "next/router"
import styled from "styled-components"

const CHANNELS_PER_PAGE = 10

const PageOfChannels = () => {
	const { width } = useViewportDimensions()
	const {
		isFallback,
		query: { pageNumber }
	} = useRouter()
	if (isFallback) return <FallbackPage />

	const { data: channels } = trpc.useQuery([
		"channels/top",
		{ take: 10, skip: (Number(pageNumber) - 1) * CHANNELS_PER_PAGE }
	])

	const { data: totalChannels = 0 } = trpc.useQuery(["channels/countAll"])
	const numberOfPages = Math.ceil(totalChannels / CHANNELS_PER_PAGE)

	const page = Number(pageNumber)

	if ((channels && channels.length === 0) || isNaN(page)) {
		return (
			<AdPageWrapper title={`Channels - Page ${page} | kittr`} description="Full channels of channels on kittr.">
				<H1>CHANNELS</H1>
				{/* <ChannelSearch /> */}
				<Paragraph>Oops, doesn't look like there's anyone here.</Paragraph>
				<Link href={Routes.CHANNEL.LIST}>
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
		<AdPageWrapper title={`Channels - Page ${page} | kittr`} description="Full channels of channels on kittr.">
			{width < 1200 && <ResponsiveBanner />}
			<H1>CHANNELS</H1>
			{/* <ChannelSearch /> */}
			<Paragraph>Select a channel to view their page with their games and featured kits.</Paragraph>
			<div style={{ padding: "0 5%" }}>
				<ChannelList data={channels || []} itemBackgroundColor={colors.darker} />
				<Paginator
					totalResults={totalChannels}
					currentPageResultStart={(page - 1) * 10 + 1}
					currentPageResultEnd={page * 10}
					isFirstPage={page === 1}
					isLastPage={page === numberOfPages}
					currentPage={page}
					pageRoot={Routes.CHANNEL.LIST}
				/>
			</div>
			{width < 1200 && <ResponsiveBanner largeWidthAdUnit="d728x90" smallWidthAdUnit="s300x250" />}
		</AdPageWrapper>
	)
}

export const getStaticPaths = async () => {
	const paths = [1, 2, 3].map((elem) => ({
		params: {
			pageNumber: String(elem)
		}
	}))

	return {
		paths,
		fallback: "blocking"
	}
}

export const getStaticProps = async ({ params }: { params: { pageNumber: string } }) => {
	const ssg = await createSSGHelper()

	const skip = (Number(params.pageNumber) - 1) * CHANNELS_PER_PAGE

	await ssg.fetchQuery("channels/top", { take: CHANNELS_PER_PAGE, skip })
	await ssg.fetchQuery("channels/countAll")

	return {
		props: {
			trpcState: ssg.dehydrate()
		},
		revalidate: 60
	}
}

export default PageOfChannels

// Styled Components

const Paragraph = styled.p`
	margin: 24px 24px 0 5%;
	padding-right: 24px;
	color: ${colors.white};
	font-family: "Montserrat", serif;
`
