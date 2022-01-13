import { GetStaticProps } from "next"
import { connectToDatabase } from "@Utils/helpers/connectToDatabase"
import { allGamesQuery, topChannelsQuery, totalKitsQuery, risingStarsQuery, getBlogPostsQuery } from "@Services/mongodb"
import { liveChannelsQuery } from "@Services/twitch/getLiveStreams"
import { getHomeChannelPromo } from "@Services/mongodb/queries/promos"
import { getTwitchChannelInfo } from "@Services/twitch/getChannelInfo"

import PageWrapper from "@Components/layouts/PageWrapper"
import Hero from "./Home/Hero"
import Body from "./Home/Body"
import PlatformInfo from "./Home/PlatformInfo"
import BlogSection from "./Home/BlogSection"
import ResponsiveAdBanner from "@Services/venatus/ResponsiveBanner"
import FrontPageBoostr from "@Features/Promo/FrontPage"

interface Props {
	games: IGame[]
	popularChannels: IChannel[]
	risingStars: IChannel[]
	blogPosts: IPost[]
	totalNumberOfKits: number
	liveChannels: IChannel[]
	featuredChannel: IHomePageBoostr | null
}

const Home = ({
	games,
	popularChannels,
	risingStars,
	blogPosts,
	totalNumberOfKits,
	liveChannels,
	featuredChannel
}: Props) => {
	return (
		<PageWrapper title="Home | kittr" description="Where the pros post their kits. Get kitted.">
			<Hero totalNumberOfKits={totalNumberOfKits} />
			<ResponsiveAdBanner />
			{featuredChannel && <FrontPageBoostr channelData={featuredChannel} />}
			<Body
				games={games}
				popularChannels={popularChannels}
				risingStars={risingStars}
				liveChannels={liveChannels.slice(0, 15)}
			/>
			<ResponsiveAdBanner />
			<PlatformInfo />
			<BlogSection posts={blogPosts} />
			<ResponsiveAdBanner largeWidthAdUnit="d728x90" smallWidthAdUnit="s300x250" />
		</PageWrapper>
	)
}

export default Home

export const getStaticProps: GetStaticProps = async () => {
	await connectToDatabase()

	const [games, totalNumberOfKits, popularChannels, risingStars, blogPosts, liveChannels, currentPromo] =
		await Promise.all([
			allGamesQuery(),
			totalKitsQuery(),
			topChannelsQuery(10),
			risingStarsQuery({ viewsGreaterThan: 400, skip: 12, sample: 10 }),
			getBlogPostsQuery({ limit: 3 }),
			liveChannelsQuery(),
			getHomeChannelPromo()
		])

	const featuredChannel = await getTwitchChannelInfo(currentPromo?.channelId || "")

	return {
		props: {
			featuredChannel,
			games,
			popularChannels,
			risingStars,
			liveChannels,
			blogPosts,
			totalNumberOfKits: Math.ceil(totalNumberOfKits / 100) * 100 || 0
		},
		revalidate: 60
	}
}
