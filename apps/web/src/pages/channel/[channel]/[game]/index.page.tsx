import { GetStaticProps, InferGetStaticPropsType } from "next"
import { useRouter } from "next/router"

import { connectToDatabase } from "@Utils/helpers/connectToDatabase"

import {
	getFullChannelProfileQuery,
	serializeFullChannelProfile,
	SerializeFullChannelProfileReturnType,
	deserializeFullChannelProfile
} from "@Services/orm/queries/channels/getFullChannelProfile"
import { gameByUrlSafeNameQuery } from "@Services/orm"
import { serializeGame, SerializeGameReturnType, deserializeGame } from "@Services/orm/utils/serializers"
import WarzoneProfile from "@Features/WarzoneProfile"
import { NoItemFound, Head } from "@Components/shared"
import FallbackPage from "@Components/layouts/FallbackPage"

const GamePresentation = ({
	channel: serializedChannel,
	game: serializedGame
}: InferGetStaticPropsType<typeof getStaticProps>) => {
	const channel = serializedChannel ? deserializeFullChannelProfile(serializedChannel) : null
	const game = serializedGame ? deserializeGame(serializedGame) : null

	const { isFallback, query } = useRouter()
	if (isFallback) return <FallbackPage />

	if (!channel) {
		return (
			<>
				<Head
					title={`Game Not Found | kittr`}
					description={`${query.channel} doesn't seem to play that game! | kittr`}
				/>
				<NoItemFound type="game" />
			</>
		)
	}

	if (game?.urlSafeName === "warzone") {
		return (
			<>
				<Head
					title={`${channel.displayName}'s ${game.displayName} Profile | kittr`}
					description={`${channel.displayName} wants to share their ${game.displayName} kits with you.`}
				/>
				<WarzoneProfile
					channel={channel}
					// popularityRates={{
					// 	ratioOfChannelsWithBase,
					// 	ratioOfChannelsWithBaseFeatured,
					// 	forSetupComparison
					// }}
				/>
			</>
		)
	}

	return (
		<>
			<Head title={`Game Not Found | kittr`} description={`${query.channel} doesn't seem to play that game! | kittr`} />
			<NoItemFound type="channel" />
		</>
	)
}

export const getStaticPaths = async () => {
	await connectToDatabase()

	const channels = await prisma.channel.findMany({
		orderBy: {
			viewCount: "desc"
		},
		take: 30,
		include: {
			games: true
		}
	})

	// I need a mapping of all the games on the top 30 channels

	const paths = channels.map((channel) => {
		return channel.games.map((game) => {
			return {
				params: {
					channel: channel.urlSafeName,
					game: game.urlSafeName
				}
			}
		})
	})

	return {
		paths: paths.flat(),
		fallback: true
	}
}

export const getStaticProps: GetStaticProps<{
	channel: SerializeFullChannelProfileReturnType | null
	game: SerializeGameReturnType | null
}> = async ({ params }) => {
	const { channel: urlSafeName, game } = params as { channel: string; game: string }
	await connectToDatabase()

	const [gameQuery, channel] = await Promise.all([
		gameByUrlSafeNameQuery({ urlSafeName: game }),
		getFullChannelProfileQuery({ urlSafeName })
	])

	const serializedGame = gameQuery ? serializeGame(gameQuery) : null
	const serializedChannel = channel ? serializeFullChannelProfile(channel) : null

	// TODO: Bring back kit stats!
	// const kitStats = await KitStat.find()
	// const { ratioOfChannelsWithBase, ratioOfChannelsWithBaseFeatured, forSetupComparison } = kitStats[0]

	return {
		props: {
			channel: serializedChannel,
			game: serializedGame
			// ratioOfChannelsWithBase,
			// ratioOfChannelsWithBaseFeatured,
			// forSetupComparison
		},
		revalidate: 15
	}
}

export default GamePresentation
