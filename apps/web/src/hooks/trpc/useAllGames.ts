import { trpc } from "@Server/createTRPCNext"
import { RouterInput } from "@Server/index"
import { Prisma } from "@kittr/prisma"

type TQueryInput = RouterInput["listGames"]
// TODO: See if we can't use this?
// It would appear that the query can't get typed correctly
// because of Prisma difficulties in the resolver.
// type TQueryOutput = InferQueryOutput<"games/list">

export const useAllGames = <T extends TQueryInput>({ include }: { include: T }) => {
	return trpc.listGames.useQuery(include)
}
