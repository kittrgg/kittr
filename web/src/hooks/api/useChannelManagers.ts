import { useQuery } from "react-query"
import { getToken } from "@Services/firebase/auth/getToken"
import { useDashboardChannel } from "@Hooks/api/useDashboardChannel"
import fetch from "@Fetch"

export const useChannelManagers = () => {
	const { data } = useDashboardChannel()

	const result = useQuery(["getManagerInfo", data?.managers], async () => {
		const aborter = new AbortController()

		const fetchManagerInfo = async (uid: string) => {
			return fetch.get<Record<string, string>>({
				url: `/api/manager/getInfo?uid=${uid}`,
				signal: aborter.signal,
				headers: { authorization: `Bearer: ${await getToken()}` }
			})
		}

		const result = data
			? data.managers.map(async (elem: IManager) => ({
					role: elem.role,
					...(await fetchManagerInfo(elem.uid))
			  }))
			: []

		return await Promise.all(result)
	})

	return result
}
