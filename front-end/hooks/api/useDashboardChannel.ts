import { useQuery } from "react-query"
import { getToken } from "@Services/firebase/auth/getToken"
import { useSelector } from "@Redux/store"

export const useDashboardChannel = () => {
	const _id = useSelector((state) => state.dashboard.activeView.channelId)

	const url = `/api/channel?_id=${_id}`

	const query = useQuery<IRawChannel, Error>(
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
