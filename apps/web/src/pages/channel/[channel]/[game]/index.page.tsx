import { GetStaticProps } from "next"
import { useRouter } from "next/router"

import { connectToDatabase } from "@Utils/helpers/connectToDatabase"
import { Channel, Game, KitStat } from "@Services/mongodb/models"
import { gameByUrlSafeNameQuery, getChannelProfileQuery } from "@Services/mongodb"
import WarzoneProfile from "@Features/WarzoneProfile"
import { NoItemFound, Head } from "@Components/shared"
import FallbackPage from "@Components/layouts/FallbackPage"

interface Props {
	channel: IChannel
	game: IGame
	ratioOfChannelsWithBase: IRatioOfChannelsWithBase[]
	ratioOfChannelsWithBaseFeatured: IRatioOfChannelsWithBaseFeatured[]
	forSetupComparison: IForSetupComparison[]
}

const GamePresentation = ({
	channel,
	game,
	ratioOfChannelsWithBase,
	ratioOfChannelsWithBaseFeatured,
	forSetupComparison
}: Props) => {
	const { isFallback, route } = useRouter()
	if (isFallback) return <FallbackPage />

	if (Object.keys(channel).length === 0) {
		return (
			<>
				<Head
					title={`Game Not Found | kittr`}
					description={`${channel.displayName} doesn't seem to play that game! | kittr`}
				/>
				<NoItemFound type="game" />
			</>
		)
	}

	console.log(`${route} has finished rendering`)
	if (game.urlSafeName === "warzone") {
		return (
			<>
				<Head
					title={`${channel.displayName}'s ${game.displayName} Profile | kittr`}
					description={`${channel.displayName} wants to share their ${game.displayName} kits with you.`}
				/>
				<WarzoneProfile
					channel={channel}
					popularityRates={{
						ratioOfChannelsWithBase,
						ratioOfChannelsWithBaseFeatured,
						forSetupComparison
					}}
				/>
			</>
		)
	}

	return (
		<>
			<Head
				title={`Game Not Found | kittr`}
				description={`${channel.displayName} doesn't seem to play that game! | kittr`}
			/>
			<NoItemFound type="channel" />
		</>
	)
}

export const getStaticPaths = async () => {
	console.log("Started getStaticPaths for channel/game")

	console.log("Connecting to database...")
	await connectToDatabase()
	console.log("Connected to database")

	const games = await Game.find().lean<Array<IGame>>()
	const leanChannels = await Channel.find({}, ["-kits"], {
		sort: {
			viewCount: -1
		},
		limit: 30
	}).lean<Array<IChannel>>()
	const channels = leanChannels.map((channel) => ({
		...channel,
		_id: channel._id.toString(),
		createdDate: channel.createdDate.toString(),
		games: channel.games.map((game: IGame) => ({ ...game, id: game.id.toString() }))
	}))

	const paths = channels.map((channel) => {
		return channel.games.map((game) => {
			return {
				params: {
					channel: channel.urlSafeName,
					game: games.find((juego) => juego._id.toString() === game.id.toString())?.urlSafeName
				}
			}
		})
	})

	return {
		paths: paths.flat(),
		fallback: true
	}
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
	console.log(`Started getStaticProps from channel/${params?.channel}/game`)
	const { channel: urlSafeName, game } = params as { channel: string; game: string }

	console.log("Connecting to database")
	await connectToDatabase()
	console.log("Connected to database")

	const [gameQuery, channel] = await Promise.all([gameByUrlSafeNameQuery(game), getChannelProfileQuery(urlSafeName)])

	const kitStats = await KitStat.find()
	const { ratioOfChannelsWithBase, ratioOfChannelsWithBaseFeatured, forSetupComparison } = kitStats[0]

	return {
		props: {
			channel,
			game: gameQuery,
			ratioOfChannelsWithBase,
			ratioOfChannelsWithBaseFeatured,
			forSetupComparison
		},
		revalidate: 15
	}
}

export default GamePresentation
