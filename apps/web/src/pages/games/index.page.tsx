import colors from "@Colors"
import AdPageWrapper, { H1 } from "@Components/layouts/AdPageWrapper"
import GameCard from "@Components/shared/GameCard"
import { useViewportDimensions } from "@Hooks/useViewportDimensions"
import ResponsiveBanner from "@Services/venatus/ResponsiveBanner"
import { connectToDatabase } from "@Utils/helpers/connectToDatabase"
import { Routes } from "@Utils/lookups/routes"
import { useRouter } from "next/router"
import styled from "styled-components"
import { prisma } from "@kittr/prisma"
import { GameWithGenresAndPlatforms } from "../../../types"

interface Props {
	games: Array<GameWithGenresAndPlatforms>
}

const GamesIndex = ({ games }: Props) => {
	const { width } = useViewportDimensions()
	const router = useRouter()

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
	await connectToDatabase()
	const raw = await prisma.game.findMany({
		include: {
			genres: true,
			platforms: true
		}
	})

	const formatted = raw.map((elem) => ({ ...elem, releaseDate: elem.releaseDate.toString() }))

	return {
		props: {
			games: formatted
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
