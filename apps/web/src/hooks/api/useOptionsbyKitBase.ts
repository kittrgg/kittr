import { trpc } from "@Server/createTRPCNext"

export const useOptionsByKitBase = (kitBaseId: string) => {
	// TODO: No listkitoptions but i think it is included in response data
	const query = trpc.getKitBase.useQuery({ kitBaseId: kitBaseId }, { enabled: !!kitBaseId })

	return query
}
