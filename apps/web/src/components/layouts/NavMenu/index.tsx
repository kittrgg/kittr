import colors from "@Colors"
import { useUser } from "@Hooks/useUser"
import { useViewportDimensions } from "@Hooks/useViewportDimensions"
import { useWindowScroll } from "@Hooks/useWindowScroll"
import { header4 } from "@Styles/typography"
import { Routes } from "@Utils/lookups/routes"
import Link from "next/link"
import { useRouter } from "next/router"
import type { ReactNode, Ref } from "react"
import styled from "styled-components"
import MobileNav from "./Mobile"
import LogoImageLink from "./LogoImageLink"

interface Props {
	/** A React reference object to forward to the header's container. */
	wrapperRef?: Ref<HTMLDivElement> | undefined
	/** Optional breakpoint at which to switch to mobile vs. desktop. Defaults to 769. */
	breakpoint?: number
	/** Optionally turns the logo on the left into a back button. */
	backFunction?: (ev: React.MouseEvent) => void
	/**
	 * Optionally render a center screen component in the mobile version. Turns the header into a banner style with a different background.
	 *
	 * Can be a string or a React Component. A string will create a simple title.
	 * */
	middleComponent?: ReactNode | string
}

/** Page header for the site. Can express itself as banner style when given a middleComponent prop. */
function NavMenu({ wrapperRef, breakpoint = 769, backFunction, middleComponent }: Props) {
	const { width } = useViewportDimensions()
	const windowScroll = useWindowScroll()
	const { pathname } = useRouter()
	const user = useUser()
	const isLoggedIn = Boolean(user?.uid)

	if (width <= breakpoint) {
		return (
			<Wrapper ref={wrapperRef} shadow={windowScroll! > 0}>
				<MobileNav backFunction={backFunction} breakpoint={breakpoint} middleComponent={middleComponent} />
			</Wrapper>
		)
	}
	return (
		<Wrapper ref={wrapperRef} shadow={windowScroll! > 0}>
			<Container breakpoint={breakpoint}>
				<LogoImageLink />
				<Link href={Routes.GAMES.LIST} legacyBehavior passHref>
					<StyledLink active={pathname.startsWith(Routes.GAMES.LIST)} data-cy="desktop-games-link">
						GAMES
					</StyledLink>
				</Link>
				<Link href={Routes.CHANNEL.LIST} legacyBehavior passHref>
					<StyledLink
						active={pathname.startsWith(Routes.CHANNEL.LIST) || pathname.startsWith(Routes.CHANNEL.LIST)}
						data-cy="desktop-channels-link"
					>
						CHANNELS
					</StyledLink>
				</Link>
				<AuthenticationLinks isLoggedIn={isLoggedIn} pathname={pathname} />
			</Container>
		</Wrapper>
	)
}

export default NavMenu

function AuthenticationLinks({ isLoggedIn, pathname }: { isLoggedIn: boolean; pathname: string }) {
	if (isLoggedIn) {
		return (
			<Link href={Routes.DASHBOARD} legacyBehavior passHref>
				<StyledLink active={pathname.startsWith(Routes.DASHBOARD)} data-cy="desktop-dashboard-link-authed">
					DASHBOARD
				</StyledLink>
			</Link>
		)
	}
	return (
		<div>
			<Link href={Routes.SIGN_UP} legacyBehavior passHref>
				<StyledLink
					active={pathname.startsWith(Routes.SIGN_UP)}
					data-cy="desktop-sign-up-link"
					style={{ paddingRight: "20px", borderRight: `2px solid ${colors.light}` }}
				>
					SIGN UP
				</StyledLink>
			</Link>
			<Link href={Routes.DASHBOARD} legacyBehavior passHref>
				<StyledLink
					active={pathname.startsWith(Routes.DASHBOARD)}
					data-cy="desktop-dashboard-link-no-auth"
					style={{ paddingLeft: "20px" }}
				>
					LOG IN
				</StyledLink>
			</Link>
		</div>
	)
}

// Styled Components

const Wrapper = styled.div<{ shadow: boolean }>`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	z-index: 999;
	box-shadow: ${(props) => (props.shadow ? "0 0 10px 2px black" : "none")};
	background-color: ${colors.middleOpacity98};
	transition: 0.1s;
`

const Container = styled.div<{ breakpoint: number }>`
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	align-items: center;
	top: 0;
	z-index: 1;

	@media (max-width: ${(props) => `${props.breakpoint}px`}) {
		display: none;
	}
`

const StyledLink = styled.a<{ active: boolean }>`
	padding: 8px;
	color: ${(props) => (props.active ? colors.lightest : colors.white)};
	${header4};
	cursor: pointer;
	text-decoration: none;

	&:hover {
		text-decoration: underline;
	}
`
