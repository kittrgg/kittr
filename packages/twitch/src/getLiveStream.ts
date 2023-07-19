import { fetcher } from '@kittr/utils';
import { headers } from './utils';

export const getStreamLiveStatus = async (twitchUsername: string) => {
  const url = `https://api.twitch.tv/helix/streams/?user_login=${twitchUsername}`;

  const data = await fetcher.get<{ data: any }>({
    url,
    headers: await headers(),
    redirect: 'follow',
  });

  return data.data[0].type === 'live';
};
