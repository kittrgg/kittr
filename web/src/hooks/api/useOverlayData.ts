import { useQuery } from "react-query"
import { getToken } from "@Services/firebase/auth/getToken"
import fetch from "@Fetch"

export const useOverlayData = (_id: string) => {
	const url = `/api/channel/overlay/get?_id=${_id}`

	const query = useQuery<IOverlay, Error>(
		url,
		async () => fetch.get({ url, headers: { authorization: `Bearer: ${await getToken()}` } }),
		{ staleTime: 60000, enabled: !!_id }
	)
	return query
}
