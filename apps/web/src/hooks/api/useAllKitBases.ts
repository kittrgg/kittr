import { useQuery } from "react-query"
import fetch from "@Fetch"
import { KitBase } from "@kittr/prisma"

// This only get used on the dashboard for one purpose and will be removed when we optimize the dashboard
// We're typing as an extended kit for now just to go through the madness
export const useAllKitBases = () => {
	const url = `/api/kits/allBases`
	const result = useQuery<KitBase[]>(url, async () => fetch.get({ url }), { staleTime: 600000 })
	return result
}
