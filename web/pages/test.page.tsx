import { GetStaticProps } from "next"
import { connectToDatabase } from "@Utils/helpers/connectToDatabase"
import { allGamesQuery, topChannelsQuery, totalKitsQuery, risingStarsQuery, getBlogPostsQuery } from "@Services/mongodb"
import { liveChannelsQuery } from "@Services/twitch/getLiveStreams"
import { getHomeChannelPromo } from "@Services/mongodb/queries/promos"
import { getTwitchChannelInfo } from "@Services/twitch/getChannelInfo"

import PageWrapper from "@Components/layouts/PageWrapper"

const Home = (props: any) => {
	console.log(props)

	return (
		<PageWrapper title="Home | kittr" description="Where the pros post their kits. Get kitted.">
			<p>hi</p>
		</PageWrapper>
	)
}

export default Home

export const getStaticProps: GetStaticProps = async () => {
	await connectToDatabase()

	// const [games, totalNumberOfKits, popularChannels, risingStars, blogPosts, liveChannels, currentPromo] =
	const [games, currentPromo] = await Promise.all([
		allGamesQuery(),
		// totalKitsQuery(),
		// topChannelsQuery(10),
		// risingStarsQuery({ viewsGreaterThan: 400, skip: 12, sample: 10 }),
		// getBlogPostsQuery({ limit: 3 }),
		// liveChannelsQuery(),
		getHomeChannelPromo()
	])

	const featuredChannel = await getTwitchChannelInfo(currentPromo?.channelId || "")

	return {
		props: {
			// featuredChannel,
			games
			// popularChannels,
			// risingStars,
			// liveChannels,
			// blogPosts,
			// totalNumberOfKits: Math.ceil(totalNumberOfKits / 100) * 100 || 0
		},
		revalidate: 60
	}
}
