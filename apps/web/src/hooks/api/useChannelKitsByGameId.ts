import { useAllKitBases } from "@Hooks/api/useAllKitBases"
import { useDashboardChannel } from "@Hooks/api/useDashboardChannel"

export const useChannelKitsByGameId = (gameId: string) => {
	const { data } = useDashboardChannel()
	const { data: allKitBases } = useAllKitBases()
	const filteredKits = data?.kits
		.map((userKit) => ({ ...userKit, base: allKitBases?.find((allKit) => allKit.id === userKit.baseId) }))
		.filter((kit) => kit?.base?.gameId === gameId)
	return filteredKits
}
