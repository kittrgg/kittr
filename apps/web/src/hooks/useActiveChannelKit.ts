import { useChannelProfileData } from "./trpc/useChannelProfileData"
import { useRouter } from "next/router"

/**
 * Uses useChannelProfileData() and useRouter().query.k (kit name) to find the kit within warzoneKits | warzoneTwoKits
 * @returns warzoneKit | warzoneTwoKit
 */
export const useActiveChannelKit = () => {
	const { data: channelData } = useChannelProfileData()
	const { query } = useRouter()

	const kitName = query.k as string
	// Warzone 2 Kits
	const activeWz2Weapon =
		channelData?.warzoneTwoKits?.find(
			(kit) =>
				(kit.base.displayName.replace(" ", "-") + kit.customTitle?.replace(" ", "-")).replace(" ", "-") ===
				kitName?.replace(" ", "-")
		) ??
		channelData?.warzoneTwoKits?.find((kit) => kit.base.displayName.replace(" ", "-") === kitName?.replace(" ", "-")) ??
		channelData?.warzoneTwoKits?.find((kit) => kit.base.displayName === kitName)

	// Warzone Kits
	const activeWzWeapon =
		channelData?.warzoneKits?.find(
			(kit) => (kit.base.displayName + kit.customTitle).replace(" ", "-") === kitName?.replace(" ", "-")
		) ?? channelData?.warzoneKits?.find((kit) => kit.base.displayName.replace(" ", "-") === kitName?.replace(" ", "-"))

	if (query.game === "wz2") {
		return activeWz2Weapon
	}

	return activeWzWeapon
}
