// Import fetch from "@Fetch"
// Import { trpc } from "@/lib/trpc"
// Import { IKitBase } from "@kittr/types/kits"

// Import { useQuery } from "react-query"

// Export const useAllKitsByGameId = (gameId: string) => {
// 	// const result = useQuery<IKitBase[]>(url, async () => fetch.get({ url }), { staleTime: 600000 })
// 	Const result = trpc.kits.bases["game-list"].useQuery({ game: gameId })
// 	Return result
// }

export {};
