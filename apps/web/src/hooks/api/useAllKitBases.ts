import { IKitBase } from "@kittr/types/kits"
import { useQuery } from "react-query"
import fetch from "@Fetch"

export const useAllKitBases = () => {
	const url = `/api/kits/allBases`
	const result = useQuery<IKitBase[]>(url, async () => fetch.get({ url }), { staleTime: 600000 })
	return result
}
