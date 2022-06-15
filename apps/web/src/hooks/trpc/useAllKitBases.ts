import { Prisma } from "@kittr/prisma"
import { trpc } from "@Server/createHooks"
import { PrismaIncludes } from "@kittr/types"

export const useAllKitBases = <T extends keyof Prisma.KitBaseInclude>({
	include
}: {
	include: PrismaIncludes<Prisma.KitBaseInclude, T>
}) => {
	type KitBasesResponse = Prisma.KitBaseGetPayload<{ include: typeof include }>

	return trpc.useQuery<"kits/bases/list", any, KitBasesResponse>(["kits/bases/list", include])
}
