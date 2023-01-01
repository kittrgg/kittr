import { trpc } from "@Server/createTRPCNext"

export const useAllKitOptions = () => {
	const query = trpc.listBases.useQuery({ availableOptions: true })

	return query
}
