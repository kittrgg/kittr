import { useQuery } from "react-query"
import { gameByUrlSafeNameQueryReturnType } from "@Services/orm/queries/games/byUrlSafeName"
import fetch from "@Fetch"

export const useGameInfo = (urlSafeName: string) => {
	const url = `/api/games?urlSafeName=${urlSafeName}`
	const result = useQuery<gameByUrlSafeNameQueryReturnType>(url, async () => fetch.get({ url }), { staleTime: 600000 })
	return result
}
