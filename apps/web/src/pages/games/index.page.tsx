import { trpc } from "@/lib/trpc"
import AdPageWrapper from "@Components/layouts/AdPageWrapper"
import GameCard from "@Components/shared/GameCard"
import ResponsiveBanner from "@Services/venatus/ResponsiveBanner"
import { Routes } from "@Utils/lookups/routes"
import { createSSGHelper } from "@kittr/trpc"
import { Text, Title } from "@kittr/ui"
import { Grid } from "@mantine/core"
import { useViewportSize } from "@mantine/hooks"
import { useRouter } from "next/router"

const GamesIndex = () => {
	const { width } = useViewportSize()
	const router = useRouter()

	const { data: games } = trpc.games.list.useQuery()

	return (
		<AdPageWrapper title="Games | kittr" description="Library of games on kittr. Get kitted.">
			{width < 1200 && <ResponsiveBanner />}
			<Title preset="h1" ml="5%">
				GAMES
			</Title>
			<Text ml="5%" mt="lg" style={{ width: "75%", lineHeight: "1.25em" }}>
				Find channels & kits by game. Stay tuned for more games coming very soon!
			</Text>
			{/* <GamesWrapper> */}
			<Grid>
				{games &&
					[...games]
						.sort((game) => (game.active ? -1 : 1))
						.map((elem) => (
							<Grid.Col md={6} key={elem.id}>
								<GameCard
									{...elem}
									onClick={() => elem.active && router.push(Routes.GAMES.createPath(elem.urlSafeName))}
								/>
							</Grid.Col>
						))}
			</Grid>
			{/* </GamesWrapper> */}
			{width < 1200 && <ResponsiveBanner largeWidthAdUnit="d728x90" smallWidthAdUnit="s300x250" />}
		</AdPageWrapper>
	)
}

export const getStaticProps = async () => {
	const ssg = await createSSGHelper()

	await ssg.games.list.fetch()

	return {
		props: {
			trpcState: ssg.dehydrate()
		},
		revalidate: 60
	}
}

export default GamesIndex
