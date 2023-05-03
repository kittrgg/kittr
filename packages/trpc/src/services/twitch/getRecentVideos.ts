import { getFromApi } from './utils/getFromApi';
import * as Logger from '@kittr/logger/node';
import { ITwitchVideo } from '@kittr/types/twitch';

interface IFunc {
  /**
   * @params
   * user_id: Twitch broadcaster_id of the user.
   *
   * @returns
   * Promise fulfilled with Twitch videos for the user.
   *
   */
  (user_id: string): Promise<ITwitchVideo[]>;
}

export const getRecentVideos: IFunc = async (user_id) => {
  try {
    const { data } = await getFromApi<ITwitchVideo[]>({
      endpointBaseUrl: 'https://api.twitch.tv/helix/videos',
      queryParams: { user_id },
    });

    return data;
  } catch (error) {
    Logger.logError(error as unknown as Error);
    console.log({ twitchError: error });
    throw { twitchError: error };
  }
};
