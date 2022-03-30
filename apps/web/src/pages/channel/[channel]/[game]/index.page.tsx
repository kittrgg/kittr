// import {
// 	IRatioOfChannelsWithBase,
// 	IRatioOfChannelsWithBaseFeatured,
// 	IForSetupComparison
// } from "@kittr/types/popularity"
import { GetStaticProps } from "next"
import { useRouter } from "next/router"

import { connectToDatabase } from "@Utils/helpers/connectToDatabase"
// import { KitStat } from "@Services/orm/models"
import { Game, prisma } from "@kittr/prisma"
import type { CompleteChannel } from "@Types/pages/WarzoneProfile"
import { gameByUrlSafeNameQuery, getChannelProfileQuery } from "@Services/orm"
import WarzoneProfile from "@Features/WarzoneProfile"
import { NoItemFound, Head } from "@Components/shared"
import FallbackPage from "@Components/layouts/FallbackPage"

interface Props {
	channel: CompleteChannel
	game: Game
	// ratioOfChannelsWithBase: IRatioOfChannelsWithBase[]
	// ratioOfChannelsWithBaseFeatured: IRatioOfChannelsWithBaseFeatured[]
	// forSetupComparison: IForSetupComparison[]
}

const GamePresentation = ({
	channel,
	game
}: // ratioOfChannelsWithBase,
// ratioOfChannelsWithBaseFeatured,
// forSetupComparison
Props) => {
	const { isFallback } = useRouter()
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

	if (game.urlSafeName === "warzone") {
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
			<Head
				title={`Game Not Found | kittr`}
				description={`${channel.displayName} doesn't seem to play that game! | kittr`}
			/>
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

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const { channel: urlSafeName, game } = params as { channel: string; game: string }
	await connectToDatabase()

	const [gameQuery, channel] = await Promise.all([
		gameByUrlSafeNameQuery(game),
		getChannelProfileQuery({ serialized: true, urlSafeName })
	])

	// TODO: Bring back kit stats!
	// const kitStats = await KitStat.find()
	// const { ratioOfChannelsWithBase, ratioOfChannelsWithBaseFeatured, forSetupComparison } = kitStats[0]

	return {
		props: {
			channel,
			game: gameQuery
			// ratioOfChannelsWithBase,
			// ratioOfChannelsWithBaseFeatured,
			// forSetupComparison
		},
		revalidate: 15
	}
}

export default GamePresentation
