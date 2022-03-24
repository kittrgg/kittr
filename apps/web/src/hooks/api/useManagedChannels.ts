import { Channel, IManager } from "@kittr/types"
import { useQuery } from "react-query"
import { getToken } from "@Services/firebase/auth/getToken"
import { useUser } from "@Hooks/useUser"
import fetch from "@Fetch"

export const useManagedChannels = () => {
	const user = useUser()

	return useQuery<Array<Channel & { role: IManager[] }>>(
		`/api/manager`,
		async () => {
			return fetch.get({ url: `/api/manager`, headers: { authorization: `Bearer: ${await getToken()}` } })
		},
		{ enabled: !!user, refetchOnWindowFocus: false }
	)
}
