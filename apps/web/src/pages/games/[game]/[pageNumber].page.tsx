import { IGame } from "@kittr/types/game"
import { IChannel } from "@kittr/types/channel"
import colors from "@Colors"
import AdPageWrapper from "@Components/layouts/AdPageWrapper"
import FallbackPage from "@Components/layouts/FallbackPage"
import { ChannelList, ChannelSearch, NoItemFound, Paginator } from "@Components/shared"
import { FirebaseStorageResolver } from "@Components/shared/FirebaseStorageResolver"
import { useViewportDimensions } from "@Hooks/useViewportDimensions"
import { channelsByGameQuery, gameByUrlSafeNameQuery, totalChannelsByGameQuery } from "@Services/orm"
import { Game } from "@Services/orm/models"
import ResponsiveBanner from "@Services/venatus/ResponsiveBanner"
import { connectToDatabase } from "@Utils/helpers/connectToDatabase"
import { Routes } from "@Utils/lookups/routes"
import { GetStaticProps } from "next"
import Link from "next/link"
import { useRouter } from "next/router"
import styled from "styled-components"

interface Props {
	gameDoesNotExist?: true
	game: IGame
	channels: IChannel[]
	totalChannels: number
	numberOfPages: number
}

const CHANNELS_PER_PAGE = 10

const GameProfile = ({ gameDoesNotExist, game, channels, totalChannels, numberOfPages }: Props) => {
	const { width } = useViewportDimensions()
	const {
		query: { pageNumber },
		isFallback
	} = useRouter()
	if (isFallback) return <FallbackPage />

	const { displayName, backgroundImage, titleImage, urlSafeName } = game
	const page = Number(pageNumber)

	if (Object.keys(game).length === 0 || isNaN(page) || gameDoesNotExist) return <NoItemFound type="game" />

	return (
		<AdPageWrapper title={`${displayName} | kittr`} description={`Check out who is playing ${displayName} on kittr.`}>
			{width < 1200 && <ResponsiveBanner />}
			<FlexRow>
				<FirebaseStorageResolver
					path={backgroundImage}
					noSpinner
					render={(img) => <BackgroundImage backgroundImage={img} />}
				/>
				<ImageContainer>
					<FirebaseStorageResolver
						path={titleImage}
						noSpinner
						render={(img) => <Image src={img} alt={displayName} />}
					/>
				</ImageContainer>
				<GameTitle>{displayName.toUpperCase()}</GameTitle>
			</FlexRow>

			<ChannelsContainer>
				<ChannelsTitle>CHANNELS</ChannelsTitle>
				<ChannelSearch />
				{channels.length === 0 && (
					<>
						<p style={{ marginTop: "24px" }}>Hm, no channels here.</p>

						<Link href={Routes.GAMES.LIST}>
							<a
								style={{
									display: "block",
									marginTop: "24px",
									marginLeft: "24px",
									color: colors.white
								}}
							>
								Back to Earth
							</a>
						</Link>
					</>
				)}
				{channels.length > 0 && (
					<>
						<ChannelList data={channels} itemBackgroundColor="#2F2F31" gameLink={urlSafeName} />
						<Paginator
							totalResults={totalChannels}
							currentPageResultStart={(page - 1) * 10 + 1}
							currentPageResultEnd={page * 10 + 1}
							isFirstPage={page === 1}
							isLastPage={page === numberOfPages}
							currentPage={page}
							pageRoot={Routes.GAMES.createPath(game.urlSafeName)}
						/>
					</>
				)}
				{width < 1200 && <ResponsiveBanner largeWidthAdUnit="d728x90" smallWidthAdUnit="s300x250" />}
			</ChannelsContainer>
		</AdPageWrapper>
	)
}

export const getStaticPaths = async () => {
	await connectToDatabase()

	const games = await Game.find().lean<Array<IGame>>()
	const paths = games.map((game) => {
		return [1, 2, 3].map((elem: number) => {
			return {
				params: {
					game: game.urlSafeName,
					pageNumber: String(elem)
				}
			}
		})
	})

	return {
		paths: paths[0],
		fallback: true
	}
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const { game, pageNumber } = params as { game: string; pageNumber: string }
	await connectToDatabase()

	const gameQuery = await gameByUrlSafeNameQuery(game)
	const totalChannels = await totalChannelsByGameQuery(gameQuery._id)

	if (!totalChannels) {
		return {
			props: {
				gameDoesNotExist: true,
				game: {
					displayName: "",
					backgroundImage: "",
					titleImage: "",
					urlSafeName: ""
				}
			}
		}
	}

	return {
		props: {
			game: gameQuery,
			channels: await channelsByGameQuery({
				gameId: gameQuery._id,
				limit: CHANNELS_PER_PAGE,
				skip: Number(Number(pageNumber) - 1) * CHANNELS_PER_PAGE
			}),
			totalChannels,
			numberOfPages: Math.ceil(totalChannels / CHANNELS_PER_PAGE)
		},
		revalidate: 60
	}
}

export default GameProfile

// Styled Components

const FlexRow = styled.div`
	position: relative;
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	align-items: center;
	justify-content: space-around;
	width: 100%;
	padding: 60px;
`

const BackgroundImage = styled.div<{ backgroundImage: string }>`
	position: absolute;
	inset: 0;
	background: linear-gradient(0deg, rgba(29, 29, 31, 1) 0%, rgba(29, 29, 31, 0.8) 50%, rgba(29, 29, 31, 1) 100%),
		url("${(props) => props.backgroundImage}");
	background-size: cover;
	background-position: center;
	z-index: -1;
	filter: blur(5px);
`

const ImageContainer = styled.div`
	width: 166px;
	min-width: 100px;
	box-shadow: 0px 0px 15px ${colors.black};
`

const Image = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
	box-shadow: 0px 0px 15px #000000;
`

const GameTitle = styled.h1`
	margin-top: 32px;
	font-family: "Barlow Condensed", serif;
	font-size: 36px;
	font-weight: 900;
	letter-spacing: 3px;
`
const ChannelsContainer = styled.div`
	padding: 0 60px;

	@media (max-width: 768px) {
		padding: 12px;
	}
`

const ChannelsTitle = styled.h2`
	font-size: 22px;
	font-weight: 600;
	letter-spacing: 2px;
`
