import colors from "@Colors"
import { ChannelAvatarList, GameList } from "@Components/shared"
import { Channel, ChannelLink, ChannelProfile, Game } from "@kittr/prisma"
import { Section, SideScroller } from "@kittr/ui"
import { Routes } from "@Utils/lookups/routes"
import Link from "next/link"
import { useRouter } from "next/router"
import styled from "styled-components"

interface ChannelWithProfile extends Channel {
	profile: ChannelProfile
}

interface ChannelWithLinks extends Channel {
	links: ChannelLink[]
}

interface Props {
	/** Games available on the platform. Includes both active and inactive games. */
	games?: Game[]
	/** Top channels sorted by view count on kittr. */
	popularChannels?: ChannelWithProfile[]
	/** Channels who aren't quite in the top channels list
	 * but we want to give some recognition and visibility.
	 * */
	risingStars?: ChannelWithProfile[]
	liveChannels?: ChannelWithLinks[]
}

/** Main content section of the home page. Games, channels, etc. */
const Body = ({ games, popularChannels, risingStars, liveChannels }: Props) => {
	const router = useRouter()

	const routeChannel = (elem: Channel) => router.push(Routes.CHANNEL.createPath(elem.urlSafeName))

	return (
		<Container>
			<Section
				title="GAMES"
				transparent
				action={
					<Link href={Routes.GAMES.LIST} passHref>
						<StyledLink>SEE ALL</StyledLink>
					</Link>
				}
			>
				<SideScroller>
					{games && (
						<GameList data={games} onClick={(elem) => router.push(Routes.GAMES.createPath(elem.urlSafeName))} />
					)}
				</SideScroller>
			</Section>

			<SideScroller
				title="LIVE NOW"
				action={
					<Link href={Routes.CHANNEL.LIST} passHref>
						<StyledLink>SEE ALL</StyledLink>
					</Link>
				}
			>
				{liveChannels && <ChannelAvatarList channels={liveChannels} onClick={routeChannel} isLive />}
			</SideScroller>

			<SideScroller
				title="TRENDING CHANNELS"
				action={
					<Link href={Routes.CHANNEL.LIST} passHref>
						<StyledLink>SEE ALL</StyledLink>
					</Link>
				}
			>
				{popularChannels && <ChannelAvatarList channels={popularChannels} onClick={routeChannel} />}
			</SideScroller>

			<SideScroller
				title="RISING STARS"
				action={
					<Link href={Routes.CHANNEL.LIST} passHref>
						<StyledLink>SEE ALL</StyledLink>
					</Link>
				}
			>
				{risingStars && <ChannelAvatarList channels={risingStars} onClick={routeChannel} />}
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

const StyledLink = styled.a`
	color: ${colors.white};
	font-weight: 600;
	font-size: 14px;
	letter-spacing: 2px;
	white-space: nowrap;
	cursor: pointer;
	text-decoration: none;
`
