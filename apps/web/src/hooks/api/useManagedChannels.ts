import { useUser } from "@Hooks/useUser"
import { trpc } from "@Server/createTRPCNext"

// export const useManagedChannels = () => {
// 	const user = useUser()
// 	return trpc.listChannels.useQuery(undefined, { enabled: !!user })
// }
