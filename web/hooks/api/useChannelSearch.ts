import { useQuery } from "react-query"

export const useChannelSearch = (searchTerm: string) => {
	const url = `/api/channels/search?searchTerm=${searchTerm}`
	const result = useQuery(url, async () => fetch(url).then((res) => res.json()), { enabled: !!searchTerm })
	return result
}
