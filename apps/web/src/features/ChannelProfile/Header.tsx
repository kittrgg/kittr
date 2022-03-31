import styled from "styled-components"

import colors from "@Colors"
import { header1, header2 } from "@Styles/typography"
import ProfileImage from "@Components/shared/ProfileImage"
import SocialIcons from "@Components/shared/SocialIcons"
import { useViewportDimensions } from "@Hooks/useViewportDimensions"

const Header = ({
	id,
	games,
	displayName,
	profile,
	links,
	plan,
	kits,
	isLive,
	imagePath
}: DeserializeFullChannelWithDeserializedGamesReturnType & { isLive: boolean; imagePath: string }) => {
	const isPremium = plan?.type === "premium"
	const hasCoverPhoto = profile?.hasCoverPhoto
	const userColor = profile?.brandColors.find((color) => color.type === "primary")?.value || colors.white
	const { width } = useViewportDimensions()

	return (
		<Wrapper hasCoverPhoto={isPremium && !!hasCoverPhoto} imagePath={imagePath}>
			<Avatar>
				<ProfileImage size="150px" imagePath={id} border={isPremium ? userColor : ""} isLive={isLive} />
				<AvatarInfo>
					<H1>{displayName}</H1>
					<Counts>
						{games.length} {games.length === 1 ? "game" : "games"}, {kits.length} kits
					</Counts>
					<SocialIcons
						links={links}
						iconSize={30}
						colorHover={userColor}
						style={{ flexWrap: width > 750 ? "nowrap" : "wrap", rowGap: "10px" }}
					/>
				</AvatarInfo>
			</Avatar>
		</Wrapper>
	)
}

export default Header

// Styled Components

const Wrapper = styled.div<{ hasCoverPhoto: boolean; imagePath: string }>`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: flex-start;
	width: 100%;
	padding: ${(props) => (props.hasCoverPhoto ? "10% 5%" : "0 5%")};
	background-image: ${(props) => (props.hasCoverPhoto ? `url("${props.imagePath}-profile-cover-photo")` : "")};
	background-size: cover;
	background-position: center;
	box-shadow: 0px 15px 15px inset ${colors.middle}, 0px -15px 15px inset ${colors.middle};
	backdrop-filter: blur(12px);
`

const Avatar = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: flex-start;
	margin-left: 10%;
	padding: 24px;
	background-color: ${colors.middleOpacity90};
	border-radius: 10px;

	@media (max-width: 675px) {
		flex-direction: column;
		padding-bottom: 18px;
	}

	@media (max-width: 500px) {
		margin: 0 auto;
		flex-direction: column;
		padding-bottom: 18px;
	}
`

const AvatarInfo = styled.div`
	margin-left: 54px;

	@media (max-width: 675px) {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		margin-left: 0;
		margin-top: 32px;
	}
`

const H1 = styled.h1`
	${header1}
`

const Counts = styled.p`
	margin: 22px 0;
	color: ${colors.lighter};
	${header2};
`
