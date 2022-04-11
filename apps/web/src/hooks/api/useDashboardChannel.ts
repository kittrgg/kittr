import { useQuery } from "react-query"
import { getToken } from "@Services/firebase/auth/getToken"
import { useSelector } from "@Redux/store"
import { getFullChannelProfileType } from "@Services/orm/queries/channels/getFullChannelProfile"
import fetch from "@Fetch"

export const useDashboardChannel = () => {
	const id = useSelector((state) => state.dashboard.activeView.channelId)

	const url = `/api/channel?id=${id}`

	const query = useQuery<getFullChannelProfileType, Error>(
		url,
		async () => fetch.get({ url, headers: { authorization: `Bearer: ${await getToken()}` } }),
		{ staleTime: 60000, enabled: !!id }
	)
	return query
}
