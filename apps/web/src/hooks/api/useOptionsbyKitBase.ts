// import fetch from "@Fetch"
// import { WarzoneKitOption } from "@kittr/prisma"
// import { useQuery } from "react-query"
import { trpc } from '@Server/createHooks'

export const useOptionsByKitBase = (kitBaseId: string) => {
	const query = trpc.useQuery(["kits/bases/options/list", { kitBaseId }])

	// const url = `/api/kits/options?kitBaseId=${kitBaseId}`
	// const result = useQuery(
	// 	url,
	// 	async () =>
	// 		await fetch.get<WarzoneKitOption[]>({ url }).catch((err) => {
	// 			throw err
	// 		}),
	// 	{
	// 		enabled: !!kitBaseId,
	// 		staleTime: 60000
	// 	}
	// )

	return query
}
