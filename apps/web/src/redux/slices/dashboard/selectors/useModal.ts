import { useSelector } from "@Redux/store"

/** Use the modal's current data. Depending on the modal type currently in use, this data can be shaped like anything. */
export const useModal = () => {
	return useSelector((state) => state.dashboard.modal)
}
