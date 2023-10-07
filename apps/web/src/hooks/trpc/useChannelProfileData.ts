import { useRouter } from 'next/router';
import { trpc } from '@/lib/trpc';

/**
 * Uses trpc query "channels/profile/get" and useRouter().query.channel to get the current channel profile data
 * @returns trpc query object
 */
export const useChannelProfileData = () => {
	const {
		query: { channel },
	} = useRouter();
	const urlChannel = channel as string;
	const query = trpc.channels.profile.get.useQuery(urlChannel, {
		enabled: Boolean(urlChannel),
	});

	return query;
};
