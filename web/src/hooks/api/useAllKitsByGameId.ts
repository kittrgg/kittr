import { useQuery } from "react-query"
import fetch from "@Fetch"

export const useAllKitsByGameId = (gameId: string) => {
	const url = `/api/kits/bases?gameId=${gameId}`
	const result = useQuery<IKitBase[]>(url, async () => fetch.get({ url }), { staleTime: 600000 })
	return result
}
