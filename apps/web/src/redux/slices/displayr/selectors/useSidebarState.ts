import { useSelector } from "@Redux/store"

/** Use the sidebar's current state in Kit Displayr */
export const useSidebarState = () => {
	return useSelector((state) => state.displayr.isSidebarOpen)
}
