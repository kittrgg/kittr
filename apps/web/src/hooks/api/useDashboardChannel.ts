import { useSelector } from "@Redux/store"
import { trpc } from "@Server/createTRPCNext"

export const useDashboardChannel = () => {
	const id = useSelector((state) => state.dashboard.activeView.channelId)

	return trpc.channels.dashboard.useQuery(id, {
		enabled: !!id
	})
}
