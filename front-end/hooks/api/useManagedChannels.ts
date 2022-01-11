import { useQuery } from "react-query"
import { getToken } from "@Services/firebase/auth/getToken"
import { useUser } from "@Hooks/useUser"

export const useManagedChannels = () => {
	const user = useUser()

	return useQuery(
		`/api/manager`,
		async () => {
			return fetch(`/api/manager`, {
				headers: {
					authorization: `Bearer: ${await getToken()}`
				}
			}).then((res) => res.json())
		},
		{ enabled: !!user, refetchOnWindowFocus: false }
	)
}
