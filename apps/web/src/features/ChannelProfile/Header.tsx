import colors from '@Colors';
import ProfileImage from '@Components/shared/ProfileImage';
import SocialIcons from '@Components/shared/SocialIcons';
import { useViewportDimensions } from '@Hooks/useViewportDimensions';
import { header1, header2 } from '@Styles/typography';
import type {
  Channel,
  ChannelBrandColor,
  ChannelLink,
  ChannelPcSpec,
  ChannelPlan,
  ChannelProfile,
  Game,
  SetupPhoto,
  WarzoneKit,
} from '@kittr/prisma';
import styled from 'styled-components';

interface Props extends Channel {
  isLive: boolean;
  imagePath: string;
  games: Game[];
  profile:
    | (ChannelProfile & {
        brandColors: ChannelBrandColor[];
        setupPhotos: SetupPhoto[];
        channelPcSpecs: ChannelPcSpec[];
      })
    | null;

  links: ChannelLink[];
  plan: ChannelPlan | null;
  warzoneKits: WarzoneKit[];
}

function Header({
  id,
  games,
  displayName,
  profile,
  links,
  plan,
  warzoneKits: kits,
  isLive,
  imagePath,
}: Props) {
  const isPremium = plan?.type === 'PREMIUM';
  const hasCoverPhoto = profile?.hasCoverPhoto;
  const userColor =
    profile?.brandColors.find((color) => color.type === 'PRIMARY')?.value ||
    colors.white;
  const { width } = useViewportDimensions();

  return (
    <Wrapper
      hasCoverPhoto={isPremium ? Boolean(hasCoverPhoto) : false}
      imagePath={imagePath}
    >
      <Avatar>
        <ProfileImage
          border={isPremium ? userColor : ''}
          hasProfileImage={Boolean(profile?.hasProfileImage)}
          imagePath={id}
          isLive={isLive}
          size="150px"
        />
        <AvatarInfo>
          <H1>{displayName}</H1>
          <Counts>
            {games.length} {games.length === 1 ? 'game' : 'games'},{' '}
            {kits.length} kits
          </Counts>
          <SocialIcons
            colorHover={userColor}
            iconSize={30}
            links={links}
            style={{
              flexWrap: width > 750 ? 'nowrap' : 'wrap',
              rowGap: '10px',
            }}
          />
        </AvatarInfo>
      </Avatar>
    </Wrapper>
  );
}

export default Header;

// Styled Components

const Wrapper = styled.div<{ hasCoverPhoto: boolean; imagePath: string }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  padding: ${(props) => (props.hasCoverPhoto ? '10% 5%' : '0 5%')};
  background-image: ${(props) =>
    props.hasCoverPhoto ? `url("${props.imagePath}-profile-cover-photo")` : ''};
  background-size: cover;
  background-position: center;
  box-shadow: 0px 15px 15px inset ${colors.middle},
    0px -15px 15px inset ${colors.middle};
  backdrop-filter: blur(12px);
`;

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
`;

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
`;

const H1 = styled.h1`
  ${header1}
`;

const Counts = styled.p`
  margin: 22px 0;
  color: ${colors.lighter};
  ${header2};
`;
