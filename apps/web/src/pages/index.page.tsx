import PageWrapper from "@Components/layouts/PageWrapper"
import { Game } from "@kittr/prisma"
import {
	getAllGamesQuery,
	getRisingStarsQuery, getTopChannelsWithProfileQuery, getTotalKitsQuery
} from "@Services/orm"
import { TChannelWithIncludeProfile, TChannelWithIncludes } from "@Services/orm/queries/channels"
import {
	deserializeChannel, deserializeGame, serializeChannel,
	SerializeChannelReturnType, serializeGame, SerializeGameReturnType
} from "@Services/orm/utils/serializers"
import { ChannelWithLinks, liveChannelsQuery } from "@Services/twitch/getLiveStreams"
import ResponsiveAdBanner from "@Services/venatus/ResponsiveBanner"
import { connectToDatabase } from "@Utils/helpers/connectToDatabase"
import { trpc } from "@Utils/trpc"
import { GetStaticProps, InferGetStaticPropsType } from "next"
import Body from "./Home/Body"
import Hero from "./Home/Hero"
import PlatformInfo from "./Home/PlatformInfo"

const Home = ({
	games,
	liveChannels,
	popularChannels,
	risingStars,
	totalNumberOfKits
}: InferGetStaticPropsType<typeof getStaticProps>) => {

	const hello = trpc.useQuery(['hello']);

	const deserializedGames = games.map((game) => deserializeGame(game))
	const deserializedPopularChannels = popularChannels.map((channel) => deserializeChannel(channel))
	const deserializedRisingStars = risingStars.map((channel) => deserializeChannel(channel))
	const deserializedLiveChannels = liveChannels.map((channel) => deserializeChannel(channel))

	console.log("TEST", hello.data)

	return (
		<PageWrapper title="Home | kittr" description="Where the pros post their kits. Get kitted.">
			<Hero totalNumberOfKits={totalNumberOfKits} />
			<ResponsiveAdBanner />
			<Body
				games={deserializedGames}
				popularChannels={deserializedPopularChannels}
				risingStars={deserializedRisingStars}
				liveChannels={deserializedLiveChannels?.slice(0, 15)}
			/>
			<ResponsiveAdBanner />
			<PlatformInfo />
			<ResponsiveAdBanner largeWidthAdUnit="d728x90" smallWidthAdUnit="s300x250" />
		</PageWrapper>
	)
}

export default Home

export const getStaticProps: GetStaticProps<{
	games: SerializeGameReturnType<Game>[]
	popularChannels: SerializeChannelReturnType<TChannelWithIncludes>[]
	risingStars: SerializeChannelReturnType<TChannelWithIncludeProfile>[]
	liveChannels: SerializeChannelReturnType<ChannelWithLinks>[]
	totalNumberOfKits: number
}> = async () => {
	await connectToDatabase()

	const [games, totalNumberOfKits, popularChannels, risingStars, liveChannels] = await Promise.all([
		getAllGamesQuery(),
		getTotalKitsQuery(),
		getTopChannelsWithProfileQuery({ take: 10 }),
		getRisingStarsQuery({ viewsGreaterThan: 400, skip: 10, limit: 10 }),
		liveChannelsQuery()
	])

	const serializedGames = games.map((game) => serializeGame(game))
	const serializedPopularChannels = popularChannels.map((channel) => serializeChannel(channel))
	const serializedRisingStars = risingStars.map((channel) => serializeChannel(channel))
	const serializedLiveChannels = liveChannels.map((channel) => serializeChannel(channel))

	return {
		props: {
			games: serializedGames,
			liveChannels: serializedLiveChannels,
			popularChannels: serializedPopularChannels,
			risingStars: serializedRisingStars,
			totalNumberOfKits: Math.ceil(totalNumberOfKits / 100) * 100 || 0
		},
		revalidate: 60
	}
}
