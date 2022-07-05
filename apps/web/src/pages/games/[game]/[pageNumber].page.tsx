import colors from "@Colors"
import AdPageWrapper from "@Components/layouts/AdPageWrapper"
import FallbackPage from "@Components/layouts/FallbackPage"
import { ChannelList, ChannelSearch, NoItemFound, Paginator } from "@Components/shared"
import { FirebaseStorageResolver } from "@Components/shared/FirebaseStorageResolver"
import { useViewportDimensions } from "@Hooks/useViewportDimensions"
import { trpc } from "@Server/createHooks"
import { createSSGHelper } from "@Server/createSSGHelper"
import ResponsiveBanner from "@Services/venatus/ResponsiveBanner"
import { Routes } from "@Utils/lookups/routes"
import Link from "next/link"
import { useRouter } from "next/router"
import { prisma } from "@kittr/prisma"
import styled from "styled-components"

const CHANNELS_PER_PAGE = 10

const GameProfile = (props: any) => {
	const { width } = useViewportDimensions()
	const { query, isFallback, push } = useRouter()
	const { pageNumber, game } = query as { pageNumber: string; game: string }

	const { data: gameData } = trpc.useQuery(["games/getByUrlSafeName", game], { enabled: !!game })
	const { data: channelCount = 0 } = trpc.useQuery(["channels/count", game], { enabled: !!game })
	const numberOfPages = Math.ceil(channelCount / CHANNELS_PER_PAGE)

	const { data: channels } = trpc.useQuery(
		[
			"channels/games/list",
			{
				urlSafeName: game,
				take: CHANNELS_PER_PAGE,
				skip: Number(Number(pageNumber) - 1) * CHANNELS_PER_PAGE
			}
		],
		{ enabled: !!game }
	)

	if (props.redirect) {
		push(`/games/${game}`)
	}

	if (isFallback) return <FallbackPage />

	const page = Number(pageNumber)
	if (!gameData || isNaN(page)) return <NoItemFound type="game" />

	return (
		<AdPageWrapper
			title={`${gameData.displayName} | kittr`}
			description={`Check out who is playing ${gameData.displayName} on kittr.`}
		>
			{width < 1200 && <ResponsiveBanner />}
			<FlexRow>
				<FirebaseStorageResolver
					path={gameData.backgroundImageUrl}
					noSpinner
					render={(img) => <BackgroundImage backgroundImage={img} />}
				/>
				<ImageContainer>
					<FirebaseStorageResolver
						path={gameData.titleImageUrl}
						noSpinner
						render={(img) => <Image src={img} alt={gameData.displayName} />}
					/>
				</ImageContainer>
				<GameTitle>{gameData.displayName.toUpperCase()}</GameTitle>
			</FlexRow>

			<ChannelsContainer>
				<ChannelsTitle>CHANNELS</ChannelsTitle>
				{/* <ChannelSearch /> */}
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
						<ChannelList data={channels} itemBackgroundColor="#2F2F31" gameLink={game} />
						<Paginator
							totalResults={channelCount ?? 0}
							currentPageResultStart={(page - 1) * 10 + 1}
							currentPageResultEnd={page * 10 + 1}
							isFirstPage={page === 1}
							isLastPage={page === numberOfPages}
							currentPage={page}
							pageRoot={Routes.GAMES.createPath(game)}
						/>
					</>
				)}
				{width < 1200 && <ResponsiveBanner largeWidthAdUnit="d728x90" smallWidthAdUnit="s300x250" />}
			</ChannelsContainer>
		</AdPageWrapper>
	)
}

export const getStaticPaths = async () => {
	const games = await prisma.game.findMany({
		orderBy: [
			{
				active: "asc"
			},
			{
				displayName: "desc"
			}
		]
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
		paths: paths.flat(),
		fallback: true
	}
}

export const getStaticProps = async ({ params }: { params: { game: string; pageNumber: string } }) => {
	const { game, pageNumber } = params

	const ssg = await createSSGHelper()

	const skip = Number(Number(pageNumber) - 1) * CHANNELS_PER_PAGE

	if (isNaN(skip)) {
		return {
			props: {
				redirect: true
			}
		}
	}

	const gameQuery = await ssg.fetchQuery("games/getByUrlSafeName", game)
	if (gameQuery) {
		await Promise.all([
			await ssg.fetchQuery("channels/count", game),
			await ssg.fetchQuery("channels/games/list", {
				urlSafeName: game,
				take: CHANNELS_PER_PAGE,
				skip
			})
		])
	}

	return {
		props: {
			trpcState: ssg.dehydrate()
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
