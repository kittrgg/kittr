import { trpc } from "@Server/createHooks"

export const useOptionsByKitBase = (kitBaseId: string) => {
	const query = trpc.useQuery(["kits/bases/options/list", { kitBaseId }], { enabled: !!kitBaseId })

	return query
}
