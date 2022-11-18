import colors from "@Colors"
import { header1, paragraph } from "@Styles/typography"
import { Routes } from "@Utils/lookups/routes"
import Link from "next/link"
import styled from "styled-components"

/** Information about the platform itself. */
const PlatformInfo = ({ ...props }) => (
	<Container>
		<Header>play bettr with kittr.</Header>
		<Summary>
			At kittr, we strive to create a <strong>better channeling experience</strong> for Twitch players, moderators, and
			viewers alike. kittr is the place for players to <strong>easily share kits with their communities</strong> in a
			sick-looking way. Everything about kittr is nice and simple - there’s not much more to it!
		</Summary>
		<TilesContainer>
			<Tile>
				<h3>PICK A GAME</h3>
				<Link href={Routes.GAMES.LIST} passHref>
					<StackLink data-cy="game-library-button">
						<ImageContainer>
							<img
								src="/media/game-stack.png"
								alt=""
								style={{ width: "100%", height: "250px", objectFit: "contain" }}
							/>
						</ImageContainer>
					</StackLink>
				</Link>
			</Tile>
			<Tile>
				<h3>PICK A CHANNEL</h3>
				<Link href={Routes.CHANNEL.LIST} passHref>
					<StackLink data-cy="channels-link-button">
						<ImageContainer>
							<img
								src="/media/channel-stack.png"
								alt=""
								style={{ width: "100%", height: "250px", objectFit: "contain" }}
							/>
						</ImageContainer>
					</StackLink>
				</Link>
			</Tile>
			<Tile>
				<h3>GET KITTD</h3>
				{/* <Link href="/kits">
                        <StackLink> */}
				<ImageContainer>
					<img src="/media/kit-stack.png" alt="" style={{ width: "100%", height: "250px", objectFit: "contain" }} />
				</ImageContainer>
				{/* </StackLink>
                    </Link> */}
			</Tile>
		</TilesContainer>
	</Container>
)

export default PlatformInfo

// Styled Components

const Container = styled.div`
	margin: 24px;
`

const Header = styled.h2`
	margin-top: 20px;
	color: ${colors.white};
	${header1};
	font-size: 48px;
	text-align: center;

	@media (max-width: 475px) {
		font-size: 28px;
	}
`

const TilesContainer = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	align-items: center;
	justify-content: space-around;
	margin-top: 84px;

	@media (max-width: 450px) {
		margin-top: 32px;
	}
`

const Tile = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	h3 {
		${header1}
	}
`

const ImageContainer = styled.div`
	width: 250px;
`

const StackLink = styled.a`
	cursor: pointer;
	transition: 0.2s;

	&:hover {
		transform: scale(1.05);
	}
`

const Summary = styled.p`
	position: relative;
	top: -20px;
	z-index: -1;
	max-width: 1000px;
	margin: 0 auto;
	padding: 50px;
	border-radius: 10px;
	background-color: ${colors.darker};
	${paragraph};
	color: ${colors.white};
	line-height: 150%;

	strong {
		font-weight: 600;
	}

	@media (max-width: 600px) {
		padding: 25px;
		font-size: 16px;
	}
`
