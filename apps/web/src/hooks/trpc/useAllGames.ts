import { Prisma } from "@kittr/prisma"
import { trpc } from "@Server/createHooks"
import { InferQueryInput } from "@Server/index"
import { captureException } from '@sentry/nextjs'

type TQueryInput = InferQueryInput<"games/list">
// TODO: See if we can't use this?
// It would appear that the query can't get typed correctly
// because of Prisma difficulties in the resolver.
// type TQueryOutput = InferQueryOutput<"games/list">

export const useAllGames = <T extends TQueryInput>({ include }: { include: T }) => {
	type GameResponse = Prisma.GameGetPayload<{ include: typeof include }>

	return trpc.useQuery<"games/list", any, GameResponse[]>(["games/list", include], {
		onError: (error) => captureException(error)
	})
}
