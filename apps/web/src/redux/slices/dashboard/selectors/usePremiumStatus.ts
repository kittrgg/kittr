import { useDashboardChannel } from "@Hooks/api/useDashboardChannel"

/** Is the channel premium and what status? */
export const usePremiumStatus = () => {
	const { data } = useDashboardChannel()

	const premiumType = data?.plan?.type

	return {
		premiumType,
		isPremium: premiumType === "PREMIUM"
	}
}
