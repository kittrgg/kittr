import type { Channel, ChannelLink } from '@kittr/prisma';
import { prisma, LinkProperty } from '@kittr/prisma';
import type { ITwitchLiveChannels } from '@kittr/types/twitch';
import { fetcher } from '@kittr/utils';
import { grabLoginName } from './utils/grabLoginName';
import { headers } from './utils/auth';

export interface ChannelWithLinks extends Channel {
  links: ChannelLink[];
}

const getTwitchLink = (channel: ChannelWithLinks) =>
  channel.links.find((link) => link.property === LinkProperty.TWITCH)?.value ??
  '';

export const liveChannelsQuery = async () => {
  const popularChannels = await prisma.channel.findMany({
    where: {
      profile: {
        hasProfileImage: process.env.IS_DEV ? undefined : true,
      },
    },
    orderBy: {
      viewCount: 'desc',
    },
    take: 100,
    include: {
      links: true,
      profile: {
        select: {
          hasProfileImage: true,
        },
      },
    },
  });

  // Create the url for the Twitch API fetch
  const buildLiveStreamRequest = (channels: ChannelWithLinks[]): string => {
    try {
      const requestBase = 'https://api.twitch.tv/helix/streams/?user_login=';

      // Grab the login names from the channels
      const channelNames = channels
        .map((channel) => grabLoginName(getTwitchLink(channel)))
        .filter((str: string | undefined) => str !== undefined);

      // Put together the base and the channel names
      const url = requestBase.concat(channelNames.join('&user_login='));
      return url;
    } catch (error) {
      console.error(error);
      // LogReport.error("Twitch Live Channels API ", error as any)
      return '';
    }
  };

  const getStreams = async (): Promise<ITwitchLiveChannels[]> => {
    const url = buildLiveStreamRequest(popularChannels);

    if (!url) return [];

    try {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const data = await fetcher.get<{ data: any }>({
        url,
        headers: await headers(),
        redirect: 'follow',
      });

      if (!data.data) {
        console.log('The Twitch API fetch did not work.', { data });
        return [];
      }

      return data.data;
    } catch (error) {
      console.error(error);
      return [];
    }
  };

  const currentlyLiveChannels = await getStreams();

  try {
    const data = popularChannels.filter((channel) =>
      currentlyLiveChannels
        .map((channel) => channel.user_login)
        .includes(
          getTwitchLink(channel).substring(
            getTwitchLink(channel).lastIndexOf('/') + 1,
          ),
        ),
    );

    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
};
