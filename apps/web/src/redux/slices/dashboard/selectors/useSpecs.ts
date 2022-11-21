import { useDashboardChannel } from "@Hooks/api/useDashboardChannel"

/** Get the channel's PC. */
export const useSpecs = () => {
	const { data } = useDashboardChannel()

	return data?.profile?.channelPcSpecs
}
