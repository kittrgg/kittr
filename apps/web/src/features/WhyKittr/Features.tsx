import colors from "@Colors"
import { header2 } from "@Styles/typography"
import { Routes } from "@Utils/lookups/routes"
import styled from "styled-components"
import * as Styled from "./style"
import CallToAction from "./CallToAction"

const FEATURE_SET = [
	{
		image: "/media/icons/displayr.svg",
		imageAlt: "Displayr Icon",
		title: "Kit Displayr",
		paragraph: `
        Stop trying to make Google Sheets look good.
        We've done the work of making your loadouts beautiful by default.
            <a href="${Routes.CHANNEL.GAME.createPath("Symfuhny", "warzone", "?k=Bullfrog")}"
                target="_blank"
                rel="noopener noreferrer"
            >
                I mean...just look at this example!
            </a>
        `
	},
	{
		image: "/media/icons/editr.svg",
		imageAlt: "Editr Icon",
		title: "Kit Editr",
		paragraph: `Collaboratively edit your kits faster, more accurately, and more easily.
        It takes about 10 clicks to fully build a kit - and even less to edit an existing one.`
	},
	{
		image: "/media/icons/youtube-embed.svg",
		imageAlt: "YouTube Embed Icon",
		title: "Youtube Embeds",
		paragraph: `Let's mix in your YouTube content in a way that people will <em>want</em> to watch it.
        On our interface, your video content begs to be watched.`
	},
	{
		image: "/media/icons/exportr.svg",
		imageAlt: "Exportr Icon",
		title: "Bot Command Exportr",
		paragraph: `Keep your bot updated with one click and a couple keystrokes.
        We create your updates for you so that you can focus on the channel.`
	}
]

/** Features that are currently a part of the platform */
function Features() {
	return (
		<section style={{ zIndex: 1 }}>
			<ImageContainer>
				<img
					alt="An example kittr page."
					src="/media/landing-page-screenie.png"
					style={{ width: "100%", height: "100%", objectFit: "cover" }}
				/>
			</ImageContainer>
			<Styled.P>Quite a bit better than a Google Sheet, huh?</Styled.P>
			<Styled.H2>FEATURES</Styled.H2>
			<Grid>
				{FEATURE_SET.map((feature) => (
					<GridItem key={feature.title}>
						<IconContainer>
							<img
								alt={feature.imageAlt}
								src={feature.image}
								style={{ width: "100%", height: "100%", objectFit: "contain" }}
							/>
						</IconContainer>
						<CardTitle>{feature.title}</CardTitle>
						<CardParagraph dangerouslySetInnerHTML={{ __html: feature.paragraph }} />
					</GridItem>
				))}
			</Grid>
			<CallToAction header="channel bettr with kittr." marginBottom="60px" />
		</section>
	)
}

export default Features

// Styled Components

const Grid = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr 1fr;
	grid-gap: 36px;
	margin: 24px 0 72px;

	@media (max-width: 1350px) {
		grid-template-columns: 1fr 1fr;
	}

	@media (max-width: 800px) {
		grid-template-columns: 1fr;
	}
`

const GridItem = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 24px;
	background-color: ${colors.light};
	border-radius: 20px;
`

const IconContainer = styled.div`
	position: relative;
	width: 100%;
	height: 100px;
	margin-bottom: 24px;
`

const CardTitle = styled.h3`
	${header2};
	font-weight: 600;
	text-align: center;
`

const CardParagraph = styled.p`
	margin-top: 24px;
	font-size: 18px;
	letter-spacing: 1px;
	line-height: 150%;

	a {
		color: ${colors.white};
	}
`

const ImageContainer = styled.div`
	z-index: 1;
	width: 50vw;
	min-width: 320px;
	margin: 0 auto 36px;
	overflow: hidden;
	box-shadow: 0 0 0 10px rgba(255, 255, 255, 0.05);
	border-radius: 12px;
`
