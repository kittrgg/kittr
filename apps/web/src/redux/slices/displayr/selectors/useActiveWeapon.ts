import { useSelector } from "@Redux/store"

/** Use the active weapon in Kit Displayr */
export const useActiveWeapon = () => {
	return useSelector((state) => state.displayr.activeWeapon)
}
