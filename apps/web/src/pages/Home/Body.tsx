import colors from "@Colors"
import { ChannelAvatarList, GameList } from "@Components/shared"
import { Routes } from "@Utils/lookups/routes"
import type { Channel, ChannelLink, ChannelProfile, Game } from "@kittr/prisma"
import { Section, SideScroller } from "@kittr/ui"
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
function Body({ games, popularChannels, risingStars, liveChannels }: Props) {
	const router = useRouter()

	const routeChannel = (elem: Channel) => router.push(Routes.CHANNEL.createPath(elem.urlSafeName))

	return (
		<Container>
			<Section
				action={
					<Link href={Routes.GAMES.LIST} legacyBehavior passHref>
						<StyledLink>SEE ALL</StyledLink>
					</Link>
				}
				title="GAMES"
				transparent
			>
				<SideScroller>
					{games ? (
						<GameList data={games} onClick={(elem) => router.push(Routes.GAMES.createPath(elem.urlSafeName))} />
					) : null}
				</SideScroller>
			</Section>

			<SideScroller
				action={
					<Link href={Routes.CHANNEL.LIST} legacyBehavior passHref>
						<StyledLink>SEE ALL</StyledLink>
					</Link>
				}
				title="LIVE NOW"
			>
				{liveChannels ? <ChannelAvatarList channels={liveChannels} isLive onClick={routeChannel} /> : null}
			</SideScroller>

			<SideScroller
				action={
					<Link href={Routes.CHANNEL.LIST} legacyBehavior passHref>
						<StyledLink>SEE ALL</StyledLink>
					</Link>
				}
				title="TRENDING CHANNELS"
			>
				{popularChannels ? <ChannelAvatarList channels={popularChannels} onClick={routeChannel} /> : null}
			</SideScroller>

			<SideScroller
				action={
					<Link href={Routes.CHANNEL.LIST} legacyBehavior passHref>
						<StyledLink>SEE ALL</StyledLink>
					</Link>
				}
				title="RISING STARS"
			>
				{risingStars ? <ChannelAvatarList channels={risingStars} onClick={routeChannel} /> : null}
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
