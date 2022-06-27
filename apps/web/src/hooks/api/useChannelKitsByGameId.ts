import { useAllKitBases } from "@Hooks/trpc/useAllKitBases"

export const useChannelKitsByGameId = (gameId: string) => {
	const { data: allKitBases } = useAllKitBases({ include: {} })
	const filteredKits = allKitBases?.filter((kit) => kit?.gameId === gameId)
	return filteredKits
}
