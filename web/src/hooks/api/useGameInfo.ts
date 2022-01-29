import { useQuery } from "react-query"

export const useGameInfo = (urlSafeName: string) => {
	const url = `/api/games?urlSafeName=${urlSafeName}`
	const result = useQuery(url, async () => fetch(url).then((res) => res.json()), { staleTime: 600000 })
	return result
}
