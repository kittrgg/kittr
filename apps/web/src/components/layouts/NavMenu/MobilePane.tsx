import colors from "@Colors"
import FullScreen from "@Components/layouts/FullScreen"
import { useLockBodyScroll } from "@Hooks/useLockBodyScroll"
import { useUser } from "@Hooks/useUser"
import { header4 } from "@Styles/typography"
import { Routes } from "@Utils/lookups/routes"
import Link from "next/link"
import { useRouter } from "next/router"
import { Dispatch, SetStateAction } from "react"
import styled from "styled-components"

interface Props {
	isOpen: boolean
	setIsOpen: Dispatch<SetStateAction<boolean>>
}

const MobileNavPane = ({ isOpen, setIsOpen }: Props) => {
	useLockBodyScroll(isOpen)
	const { pathname } = useRouter()
	const user = useUser()
	const isLoggedIn = !!user?.uid

	return (
		<FullScreen
			onClick={() => setIsOpen(false)}
			style={{
				zIndex: "99999",
				right: 0,
				backgroundColor: "rgba(29,29,31,.6)",
				opacity: isOpen ? 1 : 0,
				pointerEvents: isOpen ? "initial" : "none",
				transition: ".2s"
			}}
		>
			<Body isOpen={isOpen}>
				<CloseButton onClick={() => setIsOpen(false)}>
					<ImageContainer>
						<img alt="Kittr Logo" src="/media/icons/burger.svg" width={40} height={40} />
					</ImageContainer>
				</CloseButton>
				<LinksList>
					<Link href={Routes.ROOT} passHref>
						<StyledLink active={pathname === Routes.ROOT}>HOME</StyledLink>
					</Link>
					<Link href={Routes.GAMES.LIST} passHref>
						<StyledLink data-cy="mobile-games-link" active={pathname.startsWith(Routes.GAMES.LIST)}>
							GAMES
						</StyledLink>
					</Link>
					<Link href={Routes.CHANNEL.LIST} passHref>
						<StyledLink
							data-cy="mobile-channels-link"
							active={pathname.startsWith(Routes.CHANNEL.LIST) || pathname.startsWith(Routes.CHANNEL.LIST)}
						>
							CHANNELS
						</StyledLink>
					</Link>
				</LinksList>
				<LinksList>
					{!isLoggedIn && (
						<>
							<Link href={Routes.SIGN_UP} passHref>
								<StyledLink data-cy="mobile-sign-up-link" active={pathname.startsWith(Routes.SIGN_UP)}>
									SIGN UP
								</StyledLink>
							</Link>
							<Link href={Routes.DASHBOARD} passHref>
								<StyledLink data-cy="mobile-dashboard-link-no-auth" active={pathname.startsWith(Routes.DASHBOARD)}>
									LOG IN
								</StyledLink>
							</Link>
						</>
					)}
				</LinksList>
				{isLoggedIn && (
					<Link href={Routes.DASHBOARD} passHref>
						<StyledLink
							data-cy="mobile-dashboard-link-authed"
							active={pathname === Routes.DASHBOARD || pathname.startsWith(Routes.DASHBOARD)}
						>
							DASHBOARD
						</StyledLink>
					</Link>
				)}
			</Body>
		</FullScreen>
	)
}

export default MobileNavPane

// Styled Components

const Body = styled.div<{ isOpen: boolean }>`
	position: absolute;
	top: 0;
	bottom: 0;
	right: 0;
	width: ${(props) => (props.isOpen ? "300px" : 0)};
	padding: 22px 28px;
	background: linear-gradient(270deg, #343434 0%, #1d1d1f 100%);
	transition: 0.2s;
`

const CloseButton = styled.button`
	display: block;
	appearance: none;
	border: none;
	background: transparent;
	cursor: pointer;
	margin-left: auto;
`

const ImageContainer = styled.div`
	width: 60px;
`

const LinksList = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: space-around;
	padding: 36px 0;
`

const StyledLink = styled.a<{ active: boolean }>`
	margin: 12px;
	color: ${(props) => (props.active ? colors.lightest : colors.white)};
	${header4}
	text-decoration: none;
`
