import { useQuery } from "react-query"
import fetch from "@Fetch"

export const useAllKitOptions = () => {
	const url = `/api/kits/allOptions`
	const result = useQuery(url, async () => fetch.get({ url }), { staleTime: 600000 })
	return result
}
