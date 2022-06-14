import { Prisma } from "@kittr/prisma"
import { trpc } from "@Server/createHooks"
import { PrismaIncludes } from "@kittr/types"

export const useAllGames = <T extends keyof Prisma.GameInclude>({
	include
}: {
	include: PrismaIncludes<Prisma.GameInclude, T>
}) => {
	type GameResponse = Prisma.GameGetPayload<{ include: typeof include }>

	return trpc.useQuery<"games/list", any, GameResponse[]>(["games/list", include])
}
