import fetch from "@Fetch"
import { IKitBase } from "@kittr/types/kits"
import { useQuery } from "react-query"

export const useAllKitsByGameId = (gameId: string) => {
	const url = `/api/kits/bases?gameId=${gameId}`
	const result = useQuery<IKitBase[]>(url, async () => fetch.get({ url }), { staleTime: 600000 })
	return result
}
