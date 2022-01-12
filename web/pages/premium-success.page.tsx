import styled, { keyframes } from "styled-components"

import colors from "@Colors"
import FullScreen from "@Components/layouts/FullScreen"
import { SVG } from "@Components/shared"
import { useEffect } from "react"
import { header1 } from "@Styles/typography"

const PremiumSuccess = ({ ...props }) => {
	useEffect(() => {
		setTimeout(() => window.close(), 3000)
	}, [])

	return (
		<FullScreen
			style={{
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
				alignItems: "center",
				background: colors.premiumGradient
			}}
		>
			<IconContainer>
				<SVG.Premium
					width="150px"
					style={{
						position: "absolute",
						top: "50%",
						left: "50%",
						transform: "translate(-50%, -50%)"
					}}
				/>
			</IconContainer>
			<H1>WELCOME TO PREMIUM.</H1>
		</FullScreen>
	)
}

export default PremiumSuccess

// Styled Components

const fadeSlide = keyframes`
    0% {
        opacity: 0;
        position: relative;
        top: 100px;
    }

    100% {
        opacity: 1;
    position: relative;
    top: 0;
    }
`

const H1 = styled.h1`
	${header1};
	margin-top: 60px;
	font-size: 36px;
	animation: ${fadeSlide} 1s forwards ease;
	animation-delay: 1s;
	opacity: 0;
	position: relative;
	top: 100px;
`

const IconContainer = styled.div`
	opacity: 0;
	position: relative;
	top: 100px;
	width: 300px;
	height: 300px;
	border: 1px solid ${colors.white};
	border-radius: 100%;
	animation: ${fadeSlide} 1s forwards ease;
`
