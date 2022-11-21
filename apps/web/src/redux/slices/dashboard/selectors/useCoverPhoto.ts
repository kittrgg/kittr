import { useDashboardChannel } from "@Hooks/api/useDashboardChannel"

/** Does the user have a cover photo for their profile? */
export const useCoverPhoto = () => {
	const { data } = useDashboardChannel()

	return data?.profile?.hasCoverPhoto
}
