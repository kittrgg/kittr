import { IChannel } from "@kittr/types/channel"
import { IPost, IHomePageBoostr } from "@kittr/types/types"
import PageWrapper from "@Components/layouts/PageWrapper"
import FrontPageBoostr from "@Features/Promo/FrontPage"
import { allGamesQuery, getBlogPostsQuery, risingStarsQuery, topChannelsQuery, totalKitsQuery } from "@Services/orm"
import { liveChannelsQuery } from "@Services/twitch/getLiveStreams"
import ResponsiveAdBanner from "@Services/venatus/ResponsiveBanner"
import { connectToDatabase } from "@Utils/helpers/connectToDatabase"
import { GetStaticProps } from "next"
import BlogSection from "./Home/BlogSection"
import Body from "./Home/Body"
import Hero from "./Home/Hero"
import PlatformInfo from "./Home/PlatformInfo"
import { Game } from "@kittr/prisma"

interface Props {
	games: Game[]
	// START HERE: Refactoring the page itself to have prisma types instead of the old mongoose types
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

	const [games, totalNumberOfKits, popularChannels, risingStars, blogPosts, liveChannels] = await Promise.all([
		allGamesQuery({ serialized: true }),
		totalKitsQuery(),
		topChannelsQuery({ limit: 10, serialized: true }),
		risingStarsQuery({ viewsGreaterThan: 400, skip: 10, limit: 10, serialized: true }),
		getBlogPostsQuery({ limit: 3 }),
		liveChannelsQuery()
	])

	return {
		props: {
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
