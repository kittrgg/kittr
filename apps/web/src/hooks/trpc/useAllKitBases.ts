import { Prisma } from "@kittr/prisma"
import { trpc } from "@Server/createHooks"
import { InferQueryInput, } from "@Server/index"
import { captureException } from '@sentry/nextjs'

type TQueryInput = InferQueryInput<"kits/bases/list">

export const useAllKitBases = <T extends TQueryInput>({ include }: { include: T }) => {
	type KitBasesResponse = Prisma.WarzoneKitBaseGetPayload<{ include: typeof include }>[]

	const query = trpc.useQuery<"kits/bases/list", any, KitBasesResponse>(["kits/bases/list", include], {
		onError: (error) => captureException(error)
	})

	return query
}
