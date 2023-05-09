import colors from '@Colors';
import { download } from '@kittr/firebase/storage';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Affiliates from './Affiliates';
import FeaturedKits from './FeaturedKits';
import Games from './Games';
import Header from './Header';
import PopularClips from './PopularClips';
import PremiumCallout from './PremiumCallout';
import RecentVideos from './RecentVideos';
import Schedule from './Schedule';
import SetupPhotos from './SetupPhotos';
import Specs from './Specs';
import { trpc } from '@/lib/trpc';

function ChannelProfile() {
  const { query } = useRouter();
  const { channel: urlChannel } = query as { channel: string };

  const { data: channel } = trpc.channels.profile.get.useQuery(urlChannel, {
    enabled: Boolean(urlChannel),
  });
  const twitchLink = channel?.links.find(
    (channel) => channel.property === 'TWITCH',
  )?.value;
  const { data: twitchInfo } = trpc.twitch['profile-page'].useQuery(
    twitchLink!,
    {
      enabled: Boolean(twitchLink),
      retry: false,
    },
  );

  const isPremium = channel?.plan?.type === 'PREMIUM';
  const hasCoverPhoto = channel?.profile?.hasCoverPhoto;
  const primaryColor =
    channel?.profile?.brandColors.find((color) => color.type === 'PRIMARY')
      ?.value || colors.white;
  const [coverPhotoPath, setCoverPhotoPath] = useState('');

  useEffect(() => {
    if (isPremium && hasCoverPhoto)
      download(`${channel.id}-profile-cover-photo`, (path: string) =>
        setCoverPhotoPath(path),
      );
  }, [channel?.id, hasCoverPhoto, isPremium]);

  if (!channel) return null;

  return (
    <Container>
      <Header
        {...channel}
        imagePath={coverPhotoPath}
        isLive={twitchInfo?.channelData.type === 'live'}
      />
      <Games games={channel.games} urlSafeName={channel.urlSafeName} />
      <FeaturedKits kits={channel.warzoneKits} />
      {isPremium ? (
        <>
          <PopularClips brandColor={primaryColor} clips={twitchInfo?.clips} />
          <RecentVideos
            brandColor={primaryColor}
            coverPhotoPath={coverPhotoPath}
            hasProfileImage={Boolean(channel.profile?.hasProfileImage)}
            profileImagePath={
              channel.profile?.hasProfileImage ? channel.id : ''
            }
            videos={twitchInfo?.recentVideos}
          />

          <Schedule brandColor={primaryColor} schedule={twitchInfo?.schedule} />
          <SetupPhotos
            id={channel.id}
            setupPhotos={channel.profile?.setupPhotos || []}
          />
          <Specs
            brandColor={primaryColor}
            specs={channel.profile?.channelPcSpecs || []}
          />
          <Affiliates
            affiliates={channel.profile?.affiliates || []}
            brandColor={primaryColor}
          />
        </>
      ) : (
        <PremiumCallout />
      )}
    </Container>
  );
}

export default ChannelProfile;

//Styled Components

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 24px;
  margin-top: 12px;
`;
