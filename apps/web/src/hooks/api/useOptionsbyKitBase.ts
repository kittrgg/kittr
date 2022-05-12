import { useQuery } from "react-query"
import fetch from "@Fetch"
import { KitOption } from "@kittr/prisma"

export const useOptionsByKitBase = (kitBaseId: string) => {
	const url = `/api/kits/options?kitBaseId=${kitBaseId}`
	const result = useQuery(
		url,
		async () =>
			await fetch.get<KitOption[]>({ url }).catch((err) => {
				throw err
			}),
		{
			enabled: !!kitBaseId,
			staleTime: 60000
		}
	)

	return result
}
