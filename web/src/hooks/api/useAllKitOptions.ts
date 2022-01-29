import { useQuery } from "react-query"

export const useAllKitOptions = () => {
	const url = `/api/kits/allOptions`
	const result = useQuery(url, async () => fetch(url).then((res) => res.json()), { staleTime: 600000 })
	return result
}
