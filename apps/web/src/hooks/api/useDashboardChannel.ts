import { useQuery } from "react-query"
import { getToken } from "@Services/firebase/auth/getToken"
import { useSelector } from "@Redux/store"
import fetch from "@Fetch"
import { getDashboardChannelReturnType } from "@Services/orm/queries/channels/getDashboardChannel"

export const useDashboardChannel = () => {
	const id = useSelector((state) => state.dashboard.activeView.channelId)

	const url = `/api/channel/dashboard?id=${id}`

	const query = useQuery<getDashboardChannelReturnType>(
		url,
		async () =>
			fetch.get<getDashboardChannelReturnType>({ url, headers: { authorization: `Bearer: ${await getToken()}` } }),
		{ staleTime: 60000, enabled: !!id }
	)
	return query
}
