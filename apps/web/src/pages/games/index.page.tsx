import colors from "@Colors"
import AdPageWrapper, { H1 } from "@Components/layouts/AdPageWrapper"
import GameCard from "@Components/shared/GameCard"
import { useAllGames } from "@Hooks/trpc/useAllGames"
import { useViewportDimensions } from "@Hooks/useViewportDimensions"
import { createSSGHelper } from "@Server/createSSGHelper"
import ResponsiveBanner from "@Services/venatus/ResponsiveBanner"
import { Routes } from "@Utils/lookups/routes"
import { useRouter } from "next/router"
import styled from "styled-components"

const GamesIndex = () => {
	const { width } = useViewportDimensions()
	const router = useRouter()

	const { data: games } = useAllGames<"genres" | "platforms">({ include: { genres: true, platforms: true } })

	return (
		<AdPageWrapper title="Games | kittr" description="Library of games on kittr. Get kitted.">
			{width < 1200 && <ResponsiveBanner />}
			<H1>GAMES</H1>
			<Paragraph>Find channels & kits by game. Stay tuned for more games coming very soon!</Paragraph>
			<GamesWrapper>
				{games &&
					games.map((elem) => {
						return (
							<GameCard
								key={elem.id}
								{...elem}
								onClick={() => elem.active && router.push(Routes.GAMES.createPath(elem.urlSafeName))}
							/>
						)
					})}
			</GamesWrapper>
			{width < 1200 && <ResponsiveBanner largeWidthAdUnit="d728x90" smallWidthAdUnit="s300x250" />}
		</AdPageWrapper>
	)
}

export const getStaticProps = async () => {
	const ssg = await createSSGHelper()

	await ssg.fetchQuery("games/list", { genres: true, platforms: true })

	return {
		props: {
			trpcState: ssg.dehydrate()
		},
		revalidate: 60
	}
}

export default GamesIndex

// Styled Components

const Paragraph = styled.p`
	margin: 24px 24px 0 5%;
	padding-right: 24px;
	color: ${colors.white};
	font-family: "Montserrat", serif;
`

const GamesWrapper = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	margin: 0 auto;

	@media (max-width: 1050px) {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
`
