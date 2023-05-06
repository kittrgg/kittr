import { useDashboardChannel } from "@Hooks/api/useDashboardChannel"
import { trpc } from "@/lib/trpc"

export const useChannelManagers = () => {
	const { data: channel } = useDashboardChannel()
	const managers = channel?.managers
	const query = trpc.channels.managers.list.useQuery(
		{
			channelId: channel?.id ?? "",
			managers: managers?.map((manager) => manager) ?? []
		},
		{ enabled: Boolean(managers) && Boolean(channel?.id) }
	)

	return query
}
