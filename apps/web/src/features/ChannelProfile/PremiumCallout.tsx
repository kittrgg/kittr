import styled from "styled-components"

import colors from "@Colors"
import { SVG } from "@Components/shared"

const PremiumCallout = ({ ...props }) => {
	return (
		<Container>
			<SVG.Premium
				width="100px"
				style={{
					position: "absolute",
					transform: "translateY(-50%)",
					top: "50%",
					right: "5%",
					height: "150px",
					opacity: 0.3
				}}
			/>
			<p>Looking for Recent Clips, Recent Channels, Schedule, Specs, and Affiliates for this channel?</p>
			<p>
				If you are a manager of this channel, visit the channel's Dashboard to upgrade to <strong>Premium</strong>.
			</p>
		</Container>
	)
}

export default PremiumCallout

// Styled Components

const Container = styled.div`
	position: relative;
	margin: 0 24px;
	padding: 24px;
	border-radius: 24px;
	background: ${colors.premiumGradient};
	overflow: hidden;

	p {
		font-size: 20px;

		&:last-of-type {
			margin-top: 24px;
		}
	}

	strong {
		font-weight: 600;
	}
`
