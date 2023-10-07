import * as Logger from '@kittr/logger/node';
import type { ITwitchVideo } from '../types';
import { getFromApi } from '../utils/getFromApi';

/**
 * @params
 * user_id: Twitch broadcaster_id of the user.
 *
 * @returns
 * Promise fulfilled with Twitch videos for the user.
 *
 */
type IFunc = (user_id: string) => Promise<ITwitchVideo[]>;

export const getRecentVideos: IFunc = async (user_id) => {
	try {
		const { data } = await getFromApi<ITwitchVideo[]>({
			endpointBaseUrl: 'https://api.twitch.tv/helix/videos',
			queryParams: { user_id },
		});

		return data;
	} catch (error) {
		Logger.logError(error as Error);
		console.log({ twitchError: error });
		throw { twitchError: error };
	}
};
