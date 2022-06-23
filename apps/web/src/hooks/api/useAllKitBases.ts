import { trpc } from "@Server/createHooks"

// This only get used on the dashboard for one purpose and will be removed when we optimize the dashboard
// We're typing as an extended kit for now just to go through the madness
export const useAllKitBases = () => {
	return trpc.useQuery(["kits/bases/list", { commandCodes: true }])
}
