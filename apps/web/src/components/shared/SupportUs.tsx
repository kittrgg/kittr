import colors from "@Colors"
import { Button, SVG } from "@Components/shared"
import useDimensions from "@Hooks/useDimensions"
import { header1 } from "@Styles/typography"
import { CSSProperties } from "react"
import styled from "styled-components"

interface Props {
	containerStyles?: CSSProperties
}

export const SupportUs = ({ containerStyles }: Props) => {
	const { width, observe } = useDimensions()
	const numOfColumns = width > 400 ? 2 : 0

	return (
		<Container ref={observe} numOfColumns={numOfColumns} containerStyles={containerStyles as string}>
			<H6>SUPPORT {"KITTR'S"} CREATOR</H6>
			<Paragraph numOfColumns={numOfColumns}>
				kittr is made by one guy and supported by the community. For as little as $1, you can help make kittr continue
				to be possible. Thank you all.
			</Paragraph>
			<Button
				design="white"
				as="a"
				href="https://streamelements.com/anthonyfromkittr/tip"
				target="_blank"
				rel="noopener noreferrer"
				style={{ width: "100%", marginBottom: "10px" }}
				startIcon={<strong style={{ fontWeight: 900, fontSize: "24px", marginRight: "24px" }}>$</strong>}
				text="TIP"
			/>
			<Button
				design="white"
				as="a"
				href="https://www.patreon.com/kittrgg"
				target="_blank"
				rel="noopener noreferrer"
				style={{ width: "100%", marginBottom: "10px" }}
				startIcon={
					<SVG.Patreon
						alt="Patreon Icon"
						fill={colors.black}
						style={{
							position: "relative",
							right: "18px",
							width: "24px"
						}}
					/>
				}
				text="PATREON"
			/>
			<Button
				design="transparent"
				as="a"
				href="https://www.twitter.com/kittrgg"
				target="_blank"
				rel="noopener noreferrer"
				style={{ width: "100%", marginBottom: "10px" }}
				startIcon={
					<SVG.Twitter
						alt="Twitter Icon"
						style={{
							position: "relative",
							right: "24px",
							width: "24px"
						}}
					/>
				}
				text="FOLLOW"
			/>
			<Button
				design="transparent"
				as="a"
				href="https://www.twitch.com/anthonyfromkittr"
				target="_blank"
				rel="noopener noreferrer"
				style={{ width: "100%", marginBottom: "10px" }}
				startIcon={
					<SVG.Twitch
						alt="Twitch Icon"
						style={{
							position: "relative",
							right: "24px",
							width: "24px"
						}}
					/>
				}
				text="FOLLOW"
			/>
		</Container>
	)
}

export default SupportUs

// Styled Components

const Container = styled.div<{ containerStyles?: string; numOfColumns: number }>`
	${(props) =>
		!props.numOfColumns
			? ""
			: `
                display: grid;
                grid-template-columns: repeat(${props.numOfColumns}, 1fr);
            `};
	grid-column-gap: 16px;
	width: 310px;
	padding: 36px 32px;
	border-radius: 10px;
	background: ${colors.dark20};
	${(props) => props.containerStyles};
`

const H6 = styled.h6`
	${header1}
	margin-bottom: 12px;
	grid-column: 1 / 3;
	font-size: 22px;
	text-align: center;
`

const Paragraph = styled.p<{ numOfColumns: number }>`
	margin-bottom: 16px;
	grid-column: 1 / 3;
	color: ${colors.white};
`
