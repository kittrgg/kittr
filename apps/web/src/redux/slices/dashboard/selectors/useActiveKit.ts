import { useSelector } from "@Redux/store"

/** Use the currently active kit in the Kit Editor */
export const useActiveKit = () => {
	return useSelector((state) => state.dashboard.kitEditor.activeKit)
}
