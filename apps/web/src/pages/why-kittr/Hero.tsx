import colors from "@Colors"
import { header1, header2 } from "@Styles/typography"
import styled from "styled-components"

interface Props {
	totalNumberOfKits: number
}

/** The beautiful hero for the mod landing page. */
const Hero = ({ totalNumberOfKits }: Props) => (
	<Container>
		<ImageContainer>
			<img src="/media/hero.jpg" alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
		</ImageContainer>
		<Copy>
			<img src="/media/logo.svg" alt="" style={{ width: "100px", height: "100px" }} />
			<Headline>get kittd.</Headline>
			<KitsTotal>{totalNumberOfKits}+ kits</KitsTotal>
			<Subline>In 15 minutes, your !loadout command can look like this.</Subline>
		</Copy>
	</Container>
)

export default Hero

// Styled Components

const Container = styled.section`
	position: relative;
	top: -150px;
	z-index: -1;
	margin-bottom: -50vh;
	height: 100vh;
`

const ImageContainer = styled.div`
	position: absolute;
	inset: 0;
	width: 100%;
	height: 100vh;
	overflow: hidden;
	filter: blur(4px);
`

const Copy = styled.div`
	position: absolute;
	top: 22%;
	left: 50%;
	transform: translateX(-50%);
	width: 100%;
	z-index: 1;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`

const Headline = styled.h2`
	${header1};
	font-size: 72px;
`

const Subline = styled.h3`
	margin-top: 18px;
	padding: 0 10%;
	font-weight: 600;
	font-size: 22px;
	letter-spacing: 2px;
	text-align: center;
`

const KitsTotal = styled.p`
	color: ${colors.lightest};
	${header2};
`
