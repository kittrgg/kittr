import FallbackPage from "@Components/layouts/FallbackPage"
import { Head, NoItemFound } from "@Components/shared"
import WarzoneProfile from "@Features/WarzoneProfile"
import { createSSGHelper } from "@Server/createSSGHelper"
import { trpc } from "@Server/createTRPCNext"
import { prisma } from "@kittr/prisma"
import { useRouter } from "next/router"

const GamePresentation = () => {
	const { isFallback, query } = useRouter()
	const { game: urlGame, channel: urlChannel } = query as { game: string; channel: string }

	const { data: game } = trpc.games.getByUrlSafeName.useQuery(urlGame, {
		enabled: !!urlGame
	})
	const { data: channel } = trpc.channels.profile.get.useQuery(urlChannel, {
		enabled: !!urlChannel
	})

	if (isFallback) return <FallbackPage />

	if (!channel) {
		return (
			<>
				<Head title="Game Not Found | kittr" description={`${urlChannel} doesn't seem to play that game! | kittr`} />
				<NoItemFound type="game" />
			</>
		)
	}

	if (game?.urlSafeName === "warzone" || game?.urlSafeName === "wz2") {
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
			<Head title="Game Not Found | kittr" description={`${urlChannel} doesn't seem to play that game! | kittr`} />
			<NoItemFound type="channel" />
		</>
	)
}

export const getStaticPaths = async () => {
	const take = process.env.VERCEL_ENV === "production" ? 30 : 0

	const channels = await prisma.channel.findMany({
		orderBy: {
			viewCount: "desc"
		},
		take,
		include: {
			games: true
		}
	})

	// I need a mapping of all the games on the top 30 channels
	const paths = channels.map((channel) =>
		channel.games.map((game) => ({
			params: {
				channel: channel.urlSafeName,
				game: game.urlSafeName
			}
		}))
	)

	return {
		paths: paths.flat(),
		fallback: "blocking"
	}
}

export const getStaticProps = async ({ params }: { params: { channel: string; game: string } }) => {
	const { channel: urlChannel, game: urlGame } = params
	const ssg = await createSSGHelper()

	await ssg.games.getByUrlSafeName.fetch(urlGame)
	await ssg.channels.profile.get.fetch(urlChannel)

	// TODO: Bring back kit stats!
	// const kitStats = await KitStat.find()
	// const { ratioOfChannelsWithBase, ratioOfChannelsWithBaseFeatured, forSetupComparison } = kitStats[0]

	return {
		props: {
			trpcState: ssg.dehydrate()
		},
		revalidate: 15
	}
}

export default GamePresentation
