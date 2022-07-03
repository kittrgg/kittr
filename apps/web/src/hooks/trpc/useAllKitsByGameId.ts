import { trpc } from "@Server/createHooks"

export const useAllKitsByGameId = (gameId: string) => {
	const query = trpc.useQuery(["kits/bases/game/list", {game:gameId }])
	return query
}
