import { getStreamLiveStatus } from '@kittr/twitch';
import { cache } from 'react';

export const getCreatorLiveStatus = cache(
	async ({ twitchUsername }: { twitchUsername: string }) => {
		return getStreamLiveStatus(twitchUsername);
	},
);
