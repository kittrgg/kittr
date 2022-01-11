import { useQuery } from "react-query"

export const useOptionsByKitBase = (kitBaseId: string) => {
	const url = `/api/kits/options?kitBaseId=${kitBaseId}`
	const result = useQuery(
		url,
		async () =>
			fetch(url)
				.then((res) => res.json())
				.then((res) => res.data),
		{ enabled: !!kitBaseId, staleTime: 60000 }
	)
	return result
}
