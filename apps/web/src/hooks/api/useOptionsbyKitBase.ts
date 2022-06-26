import fetch from "@Fetch"
import { WarzoneKitOption } from "@kittr/prisma"
import { useQuery } from "react-query"

export const useOptionsByKitBase = (kitBaseId: string) => {
	const url = `/api/kits/options?kitBaseId=${kitBaseId}`
	const result = useQuery(
		url,
		async () =>
			await fetch.get<WarzoneKitOption[]>({ url }).catch((err) => {
				throw err
			}),
		{
			enabled: !!kitBaseId,
			staleTime: 60000
		}
	)

	return result
}
