import { useQuery } from "react-query"
import { getToken } from "@Services/firebase/auth/getToken"
import { useSelector } from "@Redux/store"
import fetch from "@Fetch"

export const useDashboardChannel = () => {
	const _id = useSelector((state) => state.dashboard.activeView.channelId)

	const url = `/api/channel?_id=${_id}`

	const query = useQuery<IRawChannel, Error>(
		url,
		async () => fetch.get({ url, headers: { authorization: `Bearer: ${await getToken()}` } }),
		{ staleTime: 60000, enabled: !!_id }
	)
	return query
}
