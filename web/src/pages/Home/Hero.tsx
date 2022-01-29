import colors from "@Colors"
import { FirebaseStorageResolver } from "@Components/shared/FirebaseStorageResolver"
import { header1, header2 } from "@Styles/typography"
import styled from "styled-components"

interface Props {
	/** Total number of kits on the platform. Will be rounded up to the nearest hundred. */
	totalNumberOfKits: number
}

/** The beautiful opening of the kittr home page. */
const Hero = ({ totalNumberOfKits }: Props) => {
	return (
		<Container>
			<ImageContainer>
				<img src="/media/hero.jpg" alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
			</ImageContainer>
			<Copy>
				<Headline>get kittd.</Headline>
				<KitsTotal>{totalNumberOfKits}+ kits</KitsTotal>
				<Subline>The place for streamers to share kits - and for you to use them.</Subline>
			</Copy>
			<ScreenieContainer>
				<img
					src="/media/hero-screenie.png"
					alt="An example kittr page."
					style={{ width: "100%", height: "100%", objectFit: "cover" }}
				/>
			</ScreenieContainer>
		</Container>
	)
}

export default Hero

// Styled Components

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-around;
	height: 100vh;
	z-index: -1;
	overflow: hidden;
`

const ImageContainer = styled.div`
	position: absolute;
	inset: 0;
	width: 100%;
	height: 100vh;
	overflow: hidden;
	filter: blur(4px);
	z-index: 0;
`

const Copy = styled.div`
	position: relative;
	width: 100%;
	z-index: 1;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`

const Headline = styled.h2`
	margin-bottom: 50px;
	${header1};
	font-size: 72px;
`

const Subline = styled.h3`
	padding: 0 10%;
	${header2};
	text-align: center;
`

const ScreenieContainer = styled.div`
	width: 50vw;
	min-width: 260px;
	margin: 0 auto 36px;
	overflow: hidden;
	border-radius: 12px;
	box-shadow: 0 0 0 10px rgba(255, 255, 255, 0.05);
	z-index: 1;
`

const KitsTotal = styled.p`
	margin-bottom: 14px;
	color: ${colors.lightest};
	${header2};
`
