import { useQuery } from "react-query"
import fetch from "@Fetch"

export const useChannelSearch = (searchTerm: string) => {
	const url = `/api/channels/search?searchTerm=${searchTerm}`
	const result = useQuery<Array<IChannel>>(url, async () => fetch.get({ url }), { enabled: !!searchTerm })
	return result
}
