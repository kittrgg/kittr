import * as Styled from "./style"
import { SocialIcons, ProfileImage } from "@Components/shared"
import { ChannelLink } from "@kittr/prisma"

interface Props {
	id: string
	displayName: string
	hasProfileImage: boolean
	links: ChannelLink[]
	gameCreatorCode: string
}

const TopBar = ({ id, displayName, hasProfileImage, gameCreatorCode, links }: Props) => {
	return (
		<Styled.Container>
			<Styled.Row>
				{hasProfileImage && <ProfileImage hasProfileImage={hasProfileImage} imagePath={id} />}
				<Styled.NameContainer data-cy="channel-name">
					<Styled.H1>{displayName}</Styled.H1>
					{gameCreatorCode && <Styled.Code>CODE: {gameCreatorCode}</Styled.Code>}
				</Styled.NameContainer>
			</Styled.Row>
			<SocialIcons links={links} />
		</Styled.Container>
	)
}

export default TopBar
