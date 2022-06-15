import { Prisma } from "@kittr/prisma"
import { PrismaIncludes } from "@kittr/types"
import { trpc } from "@Server/createHooks"

export const useAllGames = <T extends keyof Prisma.GameInclude>({
	include
}: {
	include: PrismaIncludes<Prisma.GameInclude, T>
}) => {
	type GameResponse = Prisma.GameGetPayload<{ include: typeof include }>

	return trpc.useQuery<"games/list", any, GameResponse[]>(["games/list", include])
}
