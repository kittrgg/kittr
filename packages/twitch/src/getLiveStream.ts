import { fetcher } from '@kittr/utils';
import { headers } from './utils';

export const getStreamLiveStatus = async (twitchUsername: string) => {
	const url = `https://api.twitch.tv/helix/streams/?user_login=${twitchUsername}`;

	try {
		const data = await fetcher.get<{ data: any }>({
			url,
			headers: await headers(),
			redirect: 'follow',
		});
		return Boolean(data.data[0]);
	} catch (err) {
		console.log(`Couldn't fetch data for twitchUsername: ${twitchUsername}`);
		return false;
	}
};
