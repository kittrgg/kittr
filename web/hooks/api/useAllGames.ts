import { useQuery } from "react-query"

export const useAllGames = () => {
	const url = `/api/games`
	const result = useQuery(url, async () => fetch(url).then((res) => res.json()), { staleTime: 600000 })
	return result
}
