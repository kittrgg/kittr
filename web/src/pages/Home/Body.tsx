import colors from "@Colors"
import { ChannelAvatarList, GameList, SideScroller } from "@Components/shared"
import { header2 } from "@Styles/typography"
import { Routes } from "@Utils/lookups/routes"
import Link from "next/link"
import { useRouter } from "next/router"
import styled from "styled-components"

interface Props {
	/** Games available on the platform. Includes both active and inactive games. */
	games: IGame[]
	/** Top channels sorted by view count on kittr. */
	popularChannels: IChannel[]
	/** Channels who aren't quite in the top channels list
	 * but we want to give some recognition and visibility.
	 * */
	risingStars: IChannel[]
	liveChannels: IChannel[]
}

/** Main content section of the home page. Games, channels, etc. */
const Body = ({ games, popularChannels, risingStars, liveChannels }: Props) => {
	const router = useRouter()

	const routeChannel = (elem: IChannel) => router.push(Routes.CHANNEL.createPath(elem.urlSafeName))

	return (
		<Container>
			<SectionHeader>
				<H2>GAMES</H2>
				<Link href={Routes.GAMES.LIST} passHref>
					<StyledLink>SEE ALL</StyledLink>
				</Link>
			</SectionHeader>

			{liveChannels.length > 0 && (
				<>
					<SideScroller childMargin="20px">
						{games && (
							<GameList data={games} onClick={(elem) => router.push(Routes.GAMES.createPath(elem.urlSafeName))} />
						)}
					</SideScroller>

					<SectionHeader style={{ marginTop: "60px" }}>
						<H2>LIVE NOW</H2>
						<Link href={Routes.CHANNEL.LIST} passHref>
							<StyledLink>SEE ALL</StyledLink>
						</Link>
					</SectionHeader>
				</>
			)}

			<SideScroller wrapperStyles={{ margin: "12px 0" }} childMargin="0 10px">
				{liveChannels && <ChannelAvatarList data={liveChannels} onClick={routeChannel} isLive />}
			</SideScroller>

			<SectionHeader>
				<H2>TRENDING CHANNELS</H2>
				<Link href={Routes.CHANNEL.LIST} passHref>
					<StyledLink>SEE ALL</StyledLink>
				</Link>
			</SectionHeader>

			<SideScroller wrapperStyles={{ margin: "12px 0" }} childMargin="0 10px">
				{popularChannels && <ChannelAvatarList data={popularChannels} onClick={routeChannel} />}
			</SideScroller>

			<SectionHeader style={{ marginTop: "60px" }}>
				<H2>RISING STARS</H2>
				<Link href={Routes.CHANNEL.LIST} passHref>
					<StyledLink>SEE ALL</StyledLink>
				</Link>
			</SectionHeader>

			<SideScroller wrapperStyles={{ margin: "12px 0" }} childMargin="0 10px">
				{risingStars && <ChannelAvatarList data={risingStars} onClick={routeChannel} />}
			</SideScroller>
		</Container>
	)
}

export default Body

// Styled Components

const Container = styled.div`
	z-index: 1;
	margin: 0 24px;
	margin-top: 36px;
`

const H2 = styled.h2`
	margin-right: 12px;
	margin-bottom: 12px;
	${header2};
`

const SectionHeader = styled.div`
	display: flex;
	flex-direction: row;
	align-items: flex-start;
	justify-content: space-between;
	margin-top: 32px;
`

const StyledLink = styled.a`
	color: ${colors.white};
	font-weight: 600;
	font-size: 14px;
	letter-spacing: 2px;
	white-space: nowrap;
	cursor: pointer;
	text-decoration: none;
`
