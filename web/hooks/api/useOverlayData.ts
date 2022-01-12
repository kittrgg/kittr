import { useQuery } from "react-query"
import { getToken } from "@Services/firebase/auth/getToken"

export const useOverlayData = (_id: string) => {
	const url = `/api/channel/overlay/get?_id=${_id}`

	const query = useQuery<IOverlay, Error>(
		url,
		async () =>
			fetch(url, {
				headers: {
					authorization: `Bearer: ${await getToken()}`
				}
			}).then((res) => res.json()),
		{ staleTime: 60000, enabled: !!_id }
	)
	return query
}
