import colors from "@Colors"
import { useUser } from "@Hooks/useUser"
import { useViewportDimensions } from "@Hooks/useViewportDimensions"
import { useWindowScroll } from "@Hooks/useWindowScroll"
import { header4 } from "@Styles/typography"
import { Routes } from "@Utils/lookups/routes"
import Link from "next/link"
import { useRouter } from "next/router"
import { ReactNode } from "react"
import styled from "styled-components"
import LogoImageLink from "./LogoImageLink"
import MobileNav from "./Mobile"

interface Props {
	/** A React reference object to forward to the header's container. */
	wrapperRef?: any
	/** Optional breakpoint at which to switch to mobile vs. desktop. Defaults to 769. */
	breakpoint?: number
	/** Optionally turns the logo on the left into a back button. */
	backFunction?: (...args: any) => any
	/**
	 * Optionally render a center screen component in the mobile version. Turns the header into a banner style with a different background.
	 *
	 * Can be a string or a React Component. A string will create a simple title.
	 * */
	middleComponent?: ReactNode | string
}

/** Page header for the site. Can express itself as banner style when given a middleComponent prop. */
const NavMenu = ({ wrapperRef, breakpoint = 769, backFunction, middleComponent }: Props) => {
	const { width } = useViewportDimensions()
	const windowScroll = useWindowScroll()
	const { pathname } = useRouter()
	const user = useUser()
	const isLoggedIn = !!user?.uid

	if (width <= breakpoint) {
		return (
			<Wrapper ref={wrapperRef} shadow={(windowScroll as number) > 0}>
				<MobileNav breakpoint={breakpoint} backFunction={backFunction} middleComponent={middleComponent} />
			</Wrapper>
		)
	} else {
		return (
			<Wrapper ref={wrapperRef} shadow={(windowScroll as number) > 0}>
				<Container breakpoint={breakpoint}>
					<LogoImageLink />
					<Link href={Routes.GAMES.LIST} passHref>
						<StyledLink data-cy="desktop-games-link" active={pathname.startsWith(Routes.GAMES.LIST)}>
							GAMES
						</StyledLink>
					</Link>
					<Link href={Routes.CHANNEL.LIST} passHref>
						<StyledLink
							data-cy="desktop-channels-link"
							active={pathname.startsWith(Routes.CHANNEL.LIST) || pathname.startsWith(Routes.CHANNEL.LIST)}
						>
							CHANNELS
						</StyledLink>
					</Link>
					<AuthenticationLinks isLoggedIn={isLoggedIn} pathname={pathname} />
				</Container>
			</Wrapper>
		)
	}
}

export default NavMenu

const AuthenticationLinks = ({ isLoggedIn, pathname }: { isLoggedIn: boolean; pathname: string }) => {
	if (isLoggedIn) {
		return (
			<Link href={Routes.DASHBOARD} passHref>
				<StyledLink data-cy="desktop-dashboard-link-authed" active={pathname.startsWith(Routes.DASHBOARD)}>
					DASHBOARD
				</StyledLink>
			</Link>
		)
	} else {
		return (
			<div>
				<Link href={Routes.SIGN_UP} passHref>
					<StyledLink
						data-cy="desktop-sign-up-link"
						active={pathname.startsWith(Routes.SIGN_UP)}
						style={{ paddingRight: "20px", borderRight: `2px solid ${colors.light}` }}
					>
						SIGN UP
					</StyledLink>
				</Link>
				<Link href={Routes.DASHBOARD} passHref>
					<StyledLink
						data-cy="desktop-dashboard-link-no-auth"
						active={pathname.startsWith(Routes.DASHBOARD)}
						style={{ paddingLeft: "20px" }}
					>
						LOG IN
					</StyledLink>
				</Link>
			</div>
		)
	}
}

// Styled Components

const Wrapper = styled.div<{ shadow: boolean }>`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	z-index: 999;
	box-shadow: ${(props) => (props.shadow ? `0 0 10px 2px black` : "none")};
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

	@media (max-width: ${(props) => props.breakpoint + "px"}) {
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
