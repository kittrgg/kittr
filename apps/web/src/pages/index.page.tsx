import Body from "./Home/Body"
import Hero from "./Home/Hero"
import PlatformInfo from "./Home/PlatformInfo"
import { trpc } from "./_app.page"
import PageWrapper from "@Components/layouts/PageWrapper"
import { useAllGames } from "@Hooks/trpc/useAllGames"
import { createSSGHelper } from "@Server/createSSGHelper"
// import { trpc } from "@Server/createTRPCNext"
import ResponsiveAdBanner from "@Services/venatus/ResponsiveBanner"

const Home = () => {
	const { data: games } = useAllGames({ include: { _count: true } })
	const { data: totalNumberOfKits } = trpc.countKits.useQuery()
	const { data: popularChannels } = trpc.listTopChannels.useQuery({ take: 10 })
	const { data: risingChannels } = trpc.listRisingChannels.useQuery()
	const { data: liveChannels } = trpc.listLiveChannels.useQuery()

	if (!totalNumberOfKits) return null

	return (
		<PageWrapper title="Home | kittr" description="Where the pros post their kits. Get kitted.">
			<Hero totalNumberOfKits={Math.floor(totalNumberOfKits / 1000) * 1000} />
			<ResponsiveAdBanner />
			<Body
				games={games}
				popularChannels={popularChannels}
				risingStars={risingChannels}
				liveChannels={liveChannels?.slice(0, 15)}
			/>
			<ResponsiveAdBanner />
			<PlatformInfo />
			<ResponsiveAdBanner largeWidthAdUnit="d728x90" smallWidthAdUnit="s300x250" />
		</PageWrapper>
	)
}

export default Home

export const getStaticProps = async () => {
	const ssg = await createSSGHelper()

	Promise.all([
		await ssg.countKits.fetch(),
		await ssg.listGames.fetch({ _count: true }),
		await ssg.listTopChannels.fetch({ take: 10 }),
		await ssg.listRisingChannels.fetch(),
		await ssg.listLiveChannels.fetch()
	])

	return {
		props: {
			trpcState: ssg.dehydrate()
		},
		revalidate: 60
	}
}
