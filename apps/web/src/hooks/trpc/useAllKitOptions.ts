import { trpc } from "@Server/createTRPCNext"

export const useAllKitOptions = ({ kitBaseId }: { kitBaseId: string }) => {
	const query = trpc.useQuery(["kits/bases/options/list", { kitBaseId }])

	return query
}
