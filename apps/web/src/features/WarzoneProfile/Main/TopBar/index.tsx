import { SocialIcons, ProfileImage } from '@Components/shared';
import type { ChannelLink } from '@kittr/prisma';
import * as Styled from './style';

interface Props {
	id: string;
	displayName: string;
	hasProfileImage: boolean;
	links: ChannelLink[];
	gameCreatorCode: string;
}

function TopBar({
	id,
	displayName,
	hasProfileImage,
	gameCreatorCode,
	links,
}: Props) {
	return (
		<Styled.Container>
			<Styled.Row>
				{hasProfileImage ? (
					<ProfileImage hasProfileImage={hasProfileImage} imagePath={id} />
				) : null}
				<Styled.NameContainer data-cy="channel-name">
					<Styled.H1>{displayName}</Styled.H1>
					{gameCreatorCode ? (
						<Styled.Code>CODE: {gameCreatorCode}</Styled.Code>
					) : null}
				</Styled.NameContainer>
			</Styled.Row>
			<SocialIcons links={links} />
		</Styled.Container>
	);
}

export default TopBar;
