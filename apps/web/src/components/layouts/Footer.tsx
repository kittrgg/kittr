import colors from "@Colors"
import { useUser } from "@Hooks/useUser"
import { paragraph } from "@Styles/typography"
import { Routes } from "@Utils/lookups/routes"
import Link from "next/link"
import styled from "styled-components"

interface Props {
	/** Assign a value to make space for any ads that may spill into the footer. */
	paddingRight?: string
}

const Footer = ({ paddingRight }: Props) => {
	const user = useUser()
	const isLoggedIn = !!user?.uid

	return (
		<Container style={{ paddingRight, marginTop: "auto" }}>
			<LinkList>
				<Link href={Routes.ROOT} passHref>
					<StyledLink>HOME</StyledLink>
				</Link>
				<Link href={Routes.GAMES.LIST} passHref>
					<StyledLink data-cy="footer-games-link">GAMES</StyledLink>
				</Link>
				<Link href={Routes.CHANNEL.LIST} passHref>
					<StyledLink data-cy="footer-channels-link">CHANNELS</StyledLink>
				</Link>
				<Link href={Routes.ABOUT} passHref>
					<StyledLink data-cy="footer-about-link">ABOUT</StyledLink>
				</Link>
				<Link href={Routes.FAQ} passHref>
					<StyledLink data-cy="footer-faq-link">FAQ</StyledLink>
				</Link>
				<Link href={Routes.CONTACT} passHref>
					<StyledLink data-cy="footer-contact-link">CONTACT US</StyledLink>
				</Link>
				{!isLoggedIn && (
					<Link href={Routes.DASHBOARD} passHref>
						<StyledLink data-cy="footer-dashboard-link">SIGN IN</StyledLink>
					</Link>
				)}
			</LinkList>
			<ImageContainer>
				<img src="/media/logo.svg" alt="" width={106} height={50} />
			</ImageContainer>
			<LinkList marginTop="20px" justifyContent="center">
				<Link href={Routes.TERMS} passHref>
					<StyledLink data-cy="footer-terms-link">TERMS</StyledLink>
				</Link>
				<Separator>|</Separator>
				<Link href={Routes.PRIVACY} passHref>
					<StyledLink data-cy="footer-privacy-link">PRIVACY</StyledLink>
				</Link>
			</LinkList>
			<IconRow>
				<a href={Routes.DISCORD} target="_blank" rel="noopener noreferrer" style={{ margin: "12px 24px" }}>
					<img src="/media/icons/discord.svg" alt="Discord Logo Link" width={50} height={50} />
				</a>
				<a href={Routes.TWITTER} target="_blank" rel="noopener noreferrer" style={{ margin: "12px 24px" }}>
					<img src="/media/icons/twitter.svg" alt="Twitter Logo Link" width={50} height={50} />
				</a>
			</IconRow>
		</Container>
	)
}

export default Footer

// Styled Components

const Container = styled.footer`
	width: 100%;
	margin-top: auto;
	padding: 60px;
	padding-bottom: 16px;
	background-color: ${colors.light};
`

const ImageContainer = styled.div`
	width: 100%;
	text-align: center;
`

const LinkList = styled.div<{ marginTop?: string; justifyContent?: string }>`
	width: 80%;
	margin: 0 auto;
	margin-top: ${(props) => props.marginTop || 0};
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	align-items: center;
	justify-content: ${(props) => props.justifyContent || "space-around"};

	@media (max-width: 500px) {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
`

const StyledLink = styled.a`
	margin: 18px;
	color: ${colors.white};
	${paragraph};
	text-decoration: none;
	text-align: center;
`

const Separator = styled.div`
	@media (max-width: 500px) {
		display: none;
	}
`

const IconRow = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
`
