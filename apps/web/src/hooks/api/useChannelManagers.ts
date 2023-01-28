import { trpc } from "@/lib/trpc"
import { useDashboardChannel } from "@Hooks/api/useDashboardChannel"

export const useChannelManagers = () => {
	const { data: channel } = useDashboardChannel()
	const managers = channel?.managers
	const query = trpc.channels.managers.list.useQuery(
		{
			channelId: channel?.id ?? "",
			managers: managers?.map((manager) => manager) ?? []
		},
		{ enabled: !!managers && !!channel?.id }
	)

	return query
}
