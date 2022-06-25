import { trpc } from "@Server/createHooks"

export const useAllKitOptions = () => {
	const query = trpc.useQuery([ "kits/options/list" ])
	return query

}
