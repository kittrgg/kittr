import { useDashboardChannel } from "@Hooks/api/useDashboardChannel"

/** Get the channel's profile image. */
export const useProfileImage = () => {
	const { data } = useDashboardChannel()

	return data?.meta.profileImage
}
