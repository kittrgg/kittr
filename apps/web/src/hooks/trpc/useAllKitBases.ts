import { trpc } from "@Server/createTRPCNext"
import { InferQueryInput } from "@Server/index"
import { Prisma } from "@kittr/prisma"

type TQueryInput = InferQueryInput<"kits/bases/list">

export const useAllKitBases = <T extends TQueryInput>({ include }: { include: T }) => {
	type KitBasesResponse = Prisma.WarzoneKitBaseGetPayload<{ include: typeof include }>[]

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const query = trpc.useQuery<"kits/bases/list", any, KitBasesResponse>(["kits/bases/list", include])

	return query
}
