import { useDashboardChannel } from '@Hooks/api/useDashboardChannel';

/** Does the user have a cover photo for their profile? */
export const useAffiliates = () => {
	const { data } = useDashboardChannel();

	return data?.profile?.affiliates;
};
