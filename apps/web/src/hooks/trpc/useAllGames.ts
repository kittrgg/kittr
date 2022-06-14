import { Prisma } from "@kittr/prisma"
import { trpc } from "@Server/createHooks"

type Booleanify<T> = {
	[P in keyof T]?: boolean
}

type PrismaIncludes<T, K extends keyof T> = Pick<Required<Booleanify<T>>, K>

export const useAllGames = <T extends keyof Prisma.GameInclude>({
	include
}: {
	include: PrismaIncludes<Prisma.GameInclude, T>
}) => {
	type GameResponse = Prisma.GameGetPayload<{ include: typeof include }>

	return trpc.useQuery<"games/list", any, GameResponse[]>(["games/list", include])
}
