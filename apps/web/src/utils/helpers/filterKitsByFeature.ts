import { WarzoneKit } from "@kittr/prisma"

/**
 * Pass in an array of Kits and we will filter for just the ones that are featured by the user.
 *
 * Optional second parameter will return the un-featured kits. Defaults to true (featured kits only).
 * */
export const filterKitsByFeature = <T extends WarzoneKit>(kits: Array<T>, bool = true): T[] => {
	if (bool) {
		return kits.filter((kit) => kit.featured)
	} else {
		return kits.filter((kit) => !kit.featured)
	}
}
