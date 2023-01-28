import { trpc } from "@/lib/trpc"
import { useSelector } from "@Redux/store"

export const useDashboardChannel = () => {
	const id = useSelector((state) => state.dashboard.activeView.channelId)

	return trpc.channels.dashboard.useQuery(id, {
		enabled: !!id
	})
}
