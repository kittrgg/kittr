import { useQuery } from "react-query"
import fetch from "@Fetch"

export const useOptionsByKitBase = (kitBaseId: string) => {
	const url = `/api/kits/options?kitBaseId=${kitBaseId}`
	const result = useQuery(url, async () => fetch.get({ url }).then((res: any) => res.data), {
		enabled: !!kitBaseId,
		staleTime: 60000
	})
	return result
}
