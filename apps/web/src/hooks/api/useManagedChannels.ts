import { useUser } from "@Hooks/useUser"
import { trpc } from "@Server/createTRPCNext"

export const useManagedChannels = () => {
	const user = useUser()
	// TODO: not sure if this is correct
	return trpc.listChannels.useQuery(undefined, { enabled: !!user })
}
