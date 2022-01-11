import { useSelector } from "@Redux/store"

/** Use the dashboard's current view */
export const useDashboardView = () => {
	return useSelector((state) => state.dashboard.activeView)
}
