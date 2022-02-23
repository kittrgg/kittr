import * as Styled from "./style"
import { SocialIcons, ProfileImage } from "@Components/shared"

interface Props {
	channelInfo: {
		displayName: string
		meta: IChannelMeta
		affiliateCode: string
	}
}

const TopBar = ({ channelInfo }: Props) => {
	const { displayName } = channelInfo
	const { hasProfileImage, profileImage, links } = channelInfo.meta

	return (
		<Styled.Container>
			<Styled.Row>
				{hasProfileImage && <ProfileImage imagePath={profileImage} />}
				<Styled.NameContainer data-cy="channel-name">
					<Styled.H1>{displayName}</Styled.H1>
					{channelInfo.affiliateCode && <Styled.Code>CODE: {channelInfo.affiliateCode}</Styled.Code>}
				</Styled.NameContainer>
			</Styled.Row>
			<SocialIcons links={links} />
		</Styled.Container>
	)
}

export default TopBar
