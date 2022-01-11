import { useQuery } from "react-query"

export const useAllKitBases = () => {
	const url = `/api/kits/allBases`
	const result = useQuery(url, async () => fetch(url).then((res) => res.json()), { staleTime: 600000 })
	return result
}
