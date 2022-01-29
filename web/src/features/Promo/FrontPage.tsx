import styled from "styled-components"

import colors from "@Colors"
import { barlow, header2, paragraph } from "@Styles/typography"
import { useDimensions } from "@Hooks/useDimensions"
import { grabLoginName } from "@Services/twitch/utils/grabLoginName"
import { ProfileImage } from "@Components/shared"

interface Props {
	channelData: IHomePageBoostr
}

const FrontPageBoostr = ({ channelData }: Props) => {
	const { width, observe } = useDimensions()
	const hostname = typeof window !== "undefined" && window.location.hostname ? window.location.hostname : ""

	const twitchChannelName = grabLoginName(channelData.twitchLink)

	return (
		<div style={{ textAlign: "center" }}>
			<H2>TODAY'S BOOSTD CHANNEL</H2>
			{twitchChannelName === "kittrgg" && (
				<>
					<KittrSubline>We're building kittr right now! Drop by, follow, and say hi. :)</KittrSubline>
					<KittrSubline>Interested in boosting your channel? Stay tuned!</KittrSubline>
				</>
			)}
			{hostname && (
				<iframe
					ref={observe}
					src={`https://channel.twitch.tv/?channel=${twitchChannelName}&parent=${hostname}`}
					style={{
						width: "100%",
						maxWidth: "1100px",
						height: width * 0.5625,
						marginTop: "36px",
						marginBottom: "28px"
					}}
					allowFullScreen={false}
				/>
			)}
			<IdentityGrid>
				<ProfileImage imagePath={channelData.profileImage} size="50px" />
				<div style={{ textAlign: "left", marginLeft: "32px" }}>
					<LinkToChannel href={channelData?.twitchLink} target="_blank" rel="noopener noreferrer">
						{channelData.twitchName}
					</LinkToChannel>
					<DimP>{channelData.game}</DimP>
				</div>
				<div style={{ textAlign: "right" }}>
					<LinkButton href={channelData.twitchLink} target="_blank" rel="noopener noreferrer">
						FOLLOW
					</LinkButton>
					<DimP>{channelData.kitCount} kits</DimP>
				</div>
			</IdentityGrid>
		</div>
	)
}

export default FrontPageBoostr

// Styled Components

const H2 = styled.h2`
	margin-right: 12px;
	${header2};
`

const KittrSubline = styled.p`
	margin-top: 12px;
	color: ${colors.lighter};
	font-size: 14px;
`

const IdentityGrid = styled.div`
	display: grid;
	grid-template-columns: auto 0.66fr 0.33fr;
	margin: 0 auto;
	max-width: 900px;
	padding: 0 24px;
	${paragraph};
`

const LinkToChannel = styled.a`
	color: ${colors.white};
	text-decoration: none;
`

const DimP = styled.p`
	margin-top: 8px;
	color: ${colors.lighter};
`

const LinkButton = styled.a`
	position: relative;
	top: -8px;
	padding: 8px 12px;
	border-radius: 12px;
	background-color: ${colors.twitchPurple};
	color: ${colors.white};
	${barlow};
	font-size: 18px;
	font-weight: 700;
	text-decoration: none;
	letter-spacing: 2px;
`
