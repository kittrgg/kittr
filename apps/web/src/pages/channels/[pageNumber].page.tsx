import { trpc } from "@/lib/trpc"
import colors from "@Colors"
import AdPageWrapper from "@Components/layouts/AdPageWrapper"
import FallbackPage from "@Components/layouts/FallbackPage"
import { ChannelList, Paginator } from "@Components/shared"
import { useViewportDimensions } from "@Hooks/useViewportDimensions"
import ResponsiveBanner from "@Services/venatus/ResponsiveBanner"
import { Routes } from "@Utils/lookups/routes"
import { createSSGHelper } from "@kittr/trpc"
import { Text, Title } from "@kittr/ui"
import Link from "next/link"
import { useRouter } from "next/router"

const CHANNELS_PER_PAGE = 10

const PageOfChannels = () => {
	const { width } = useViewportDimensions()
	const {
		isFallback,
		query: { pageNumber }
	} = useRouter()
	if (isFallback) return <FallbackPage />

	const { data: channels } = trpc.channels.top.useQuery({
		take: 10,
		skip: (Number(pageNumber) - 1) * CHANNELS_PER_PAGE
	})

	const { data: totalChannels = 0 } = trpc.channels.countAll.useQuery()
	const numberOfPages = Math.ceil(totalChannels / CHANNELS_PER_PAGE)

	const page = Number(pageNumber)

	if ((channels && channels.length === 0) || isNaN(page)) {
		return (
			<AdPageWrapper title={`Channels - Page ${page} | kittr`} description="Full channels of channels on kittr.">
				<Title preset="h1" sx={{ margin: "12px 0", padding: "0 5%" }}>
					CHANNELS
				</Title>
				{/* <ChannelSearch /> */}
				<Text m="25px 25px 0 5%" sx={{ paddingRight: "24px" }}>
					Oops, doesn't look like there's anyone here.
				</Text>
				<Link
					href={Routes.CHANNEL.LIST}
					style={{
						display: "block",
						marginTop: "24px",
						marginLeft: "24px",
						color: colors.white
					}}
				>
					Back to Earth
				</Link>
			</AdPageWrapper>
		)
	}

	return (
		<AdPageWrapper title={`Channels - Page ${page} | kittr`} description="Full channels of channels on kittr.">
			{width < 1200 && <ResponsiveBanner />}
			<Title preset="h1" sx={{ margin: "12px 0", padding: "0 5%" }}>
				CHANNELS
			</Title>
			{/* <ChannelSearch /> */}
			<Text m="25px 25px 0 5%" sx={{ paddingRight: "24px" }}>
				Select a channel to view their page with their games and featured kits.
			</Text>
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

	// await ssg.fetchQuery("channels/top", { take: CHANNELS_PER_PAGE, skip })
	// await ssg.fetchQuery("channels/countAll")
	await ssg.channels.top.fetch({ take: CHANNELS_PER_PAGE, skip })
	await ssg.channels.countAll.fetch()

	return {
		props: {
			trpcState: ssg.dehydrate()
		},
		revalidate: 60
	}
}

export default PageOfChannels
