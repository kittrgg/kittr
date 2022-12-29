import { trpc } from "@Server/createTRPCNext"
import { InferQueryInput } from "@Server/index"
import { Prisma } from "@kittr/prisma"

type TQueryInput = InferQueryInput<"games/list">
// TODO: See if we can't use this?
// It would appear that the query can't get typed correctly
// because of Prisma difficulties in the resolver.
// type TQueryOutput = InferQueryOutput<"games/list">

export const useAllGames = <T extends TQueryInput>({ include }: { include: T }) => {
	type GameResponse = Prisma.GameGetPayload<{ include: typeof include }>

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	return trpc.useQuery<"games/list", any, GameResponse[]>(["games/list", include])
}
