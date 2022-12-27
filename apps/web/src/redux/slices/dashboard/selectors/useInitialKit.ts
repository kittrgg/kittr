import { useSelector } from "@Redux/store"

/** Use the inital kit that was selected in the Kit Editor */
export const useInitialKit = () => {
	return useSelector((state) => state.dashboard.kitEditor.initialKit)
}
