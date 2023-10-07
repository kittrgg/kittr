import { useDashboardChannel } from '@Hooks/api/useDashboardChannel';
import { useUser } from '@Hooks/useUser';

/** Get the role of the currently logged in user for the channel that is open in the dashboard. */
export const useManagerRole = () => {
	const { data } = useDashboardChannel();
	const user = useUser();

	const manager = data?.managers.find(
		(manager) => manager.firebaseId === user?.uid,
	) || { uid: '', role: '' };

	return manager.role;
};
