import { useUser } from "@Hooks/useUser"
import { trpc } from "@Server/createHooks"

export const useManagedChannels = () => {
	const user = useUser()

	return trpc.useQuery(["managers/channels/list"], { enabled: !!user })
}
