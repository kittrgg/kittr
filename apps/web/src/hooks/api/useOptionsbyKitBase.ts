import { trpc } from "@Server/createTRPCNext"

export const useOptionsByKitBase = (kitBaseId: string) => {
	const query = trpc.kits.bases.options.list.useQuery({ kitBaseId: kitBaseId }, { enabled: !!kitBaseId })

	return query
}
