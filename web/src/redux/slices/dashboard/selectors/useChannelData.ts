import { useDashboardChannel } from "@Hooks/api/useDashboardChannel"

/** A dashboard specific hook for getting the currently active channel's data. */
export const useChannelData = () => {
	const { data } = useDashboardChannel()
	return data as IRawChannel
}
