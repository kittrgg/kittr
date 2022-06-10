import { ChannelLink } from "@kittr/prisma"
import * as Styled from "./style"
import { SocialIcons, ProfileImage } from "@Components/shared"

interface Props {
	id: string
	displayName: string
	hasProfileImage: boolean
	links: ChannelLink[]
	gameAffiliateCode: string
}

const TopBar = ({ id, displayName, hasProfileImage, gameAffiliateCode, links }: Props) => {
	return (
		<Styled.Container>
			<Styled.Row>
				{hasProfileImage && <ProfileImage hasProfileImage={hasProfileImage} imagePath={id} />}
				<Styled.NameContainer data-cy="channel-name">
					<Styled.H1>{displayName}</Styled.H1>
					{gameAffiliateCode && <Styled.Code>CODE: {gameAffiliateCode}</Styled.Code>}
				</Styled.NameContainer>
			</Styled.Row>
			<SocialIcons links={links} />
		</Styled.Container>
	)
}

export default TopBar
