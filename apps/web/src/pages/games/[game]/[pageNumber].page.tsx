import colors from "@Colors"
import FallbackPage from "@Components/layouts/FallbackPage"
import { ChannelList, ChannelSearch, NoItemFound, Paginator } from "@Components/shared"
import { FirebaseStorageResolver } from "@Components/shared/FirebaseStorageResolver"
import { useViewportDimensions } from "@Hooks/useViewportDimensions"
import {
	getChannelsByGameQuery,
	gameByUrlSafeNameQuery,
	getTotalChannelsByGameQuery,
	getTotalChannelsByGameQueryReturnType
} from "@Services/orm"
import {
	SerializeChannelReturnType,
	serializeGame,
	SerializeGameReturnType,
	deserializeChannel,
	deserializeGame
} from "@Services/orm/utils/serializers"
import AdPageWrapper from "@Components/layouts/AdPageWrapper"
import ResponsiveBanner from "@Services/venatus/ResponsiveBanner"
import { connectToDatabase } from "@Utils/helpers/connectToDatabase"
import { Routes } from "@Utils/lookups/routes"
import { GetStaticProps, InferGetStaticPropsType } from "next"
import Link from "next/link"
import { useRouter } from "next/router"
import styled from "styled-components"
import { ChannelLink, ChannelProfile } from "@kittr/prisma"

const CHANNELS_PER_PAGE = 10

const GameProfile = ({
	gameDoesNotExist,
	serializedGame,
	deserializedChannels,
	totalChannels,
	numberOfPages
}: InferGetStaticPropsType<typeof getStaticProps>) => {
	const { width } = useViewportDimensions()
	const {
		query: { pageNumber },
		isFallback
	} = useRouter()
	if (isFallback) return <FallbackPage />

	const page = Number(pageNumber)

	if (!serializedGame || isNaN(page) || gameDoesNotExist) return <NoItemFound type="game" />

	const game = deserializeGame(serializedGame)
	const channels = deserializedChannels?.map(deserializeChannel) ?? []

	return (
		<AdPageWrapper
			title={`${game.displayName} | kittr`}
			description={`Check out who is playing ${game.displayName} on kittr.`}
		>
			{width < 1200 && <ResponsiveBanner />}
			<FlexRow>
				<FirebaseStorageResolver
					path={game.backgroundImageUrl}
					noSpinner
					render={(img) => <BackgroundImage backgroundImage={img} />}
				/>
				<ImageContainer>
					<FirebaseStorageResolver
						path={game.titleImageUrl}
						noSpinner
						render={(img) => <Image src={img} alt={game.displayName} />}
					/>
				</ImageContainer>
				<GameTitle>{game.displayName.toUpperCase()}</GameTitle>
			</FlexRow>

			<ChannelsContainer>
				<ChannelsTitle>CHANNELS</ChannelsTitle>
				<ChannelSearch />
				{channels?.length === 0 && (
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
				{channels && channels.length > 0 && (
					<>
						<ChannelList data={channels} itemBackgroundColor="#2F2F31" gameLink={game.urlSafeName} />
						<Paginator
							totalResults={totalChannels ?? 0}
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

	const games = await prisma.game.findMany({
		orderBy: {
			active: "asc",
			displayName: "desc"
		}
	})
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

export const getStaticProps: GetStaticProps<{
	gameDoesNotExist: boolean
	serializedGame: SerializeGameReturnType | null
	deserializedChannels: Array<
		SerializeChannelReturnType & { profile: ChannelProfile | null; links: ChannelLink[] }
	> | null
	totalChannels: getTotalChannelsByGameQueryReturnType
	numberOfPages: number
}> = async ({ params }) => {
	const { game, pageNumber } = params as { game: string; pageNumber: string }
	await connectToDatabase()

	const gameQuery = await gameByUrlSafeNameQuery({ urlSafeName: game })
	const totalChannels = await getTotalChannelsByGameQuery(gameQuery?.id ?? "")

	if (!totalChannels || !gameQuery) {
		return {
			props: {
				gameDoesNotExist: true,
				serializedGame: null,
				deserializedChannels: null,
				totalChannels: 0,
				numberOfPages: 0
			}
		}
	}

	const channels = await getChannelsByGameQuery({
		gameId: gameQuery?.id,
		take: CHANNELS_PER_PAGE,
		skip: Number(Number(pageNumber) - 1) * CHANNELS_PER_PAGE
	})

	const serializedChannels = channels.map((channel) => ({
		...channel,
		createdAt: channel.createdAt.toISOString()
	}))

	const serializedGame = serializeGame(gameQuery)

	return {
		props: {
			gameDoesNotExist: false,
			serializedGame: serializedGame,
			deserializedChannels: serializedChannels,
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
