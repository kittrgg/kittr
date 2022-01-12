import { useQuery } from "react-query"

export const useAllKitsByGameId = (gameId: string) => {
	const url = `/api/kits/bases?gameId=${gameId}`
	const result = useQuery(url, async () => fetch(url).then((res) => res.json()), { staleTime: 600000 })
	return result
}
