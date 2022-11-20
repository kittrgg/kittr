import { useSelector } from "@Redux/store"

/** Use the dashboard's current view */
export const useChannelView = () => {
	return useSelector((state) => state.dashboard.channelView)
}
