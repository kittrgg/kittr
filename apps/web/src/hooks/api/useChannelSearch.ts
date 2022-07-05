import { Channel } from "@kittr/prisma"
import { useQuery } from "react-query"
import fetch from "@Fetch"

export const useChannelSearch = (searchTerm: string) => {
	const url = `/api/channels/search?searchTerm=${searchTerm}`
	const result = useQuery<Array<Channel>>(url, async () => fetch.get({ url }), { enabled: !!searchTerm })
	return result
}
