import { getAllGamesQueryReturnType } from "@Services/orm/queries/games/getAll"
import { useQuery } from "react-query"
import fetch from "@Fetch"

export const useAllGames = () => {
	const url = `/api/games`
	const result = useQuery<getAllGamesQueryReturnType>(url, async () => fetch.get({ url }), { staleTime: 600000 })
	return result
}
