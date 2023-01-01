import { useDashboardChannel } from "@Hooks/api/useDashboardChannel"
import { trpc } from "@Server/createTRPCNext"

export const useChannelManagers = () => {
	const { data: channel } = useDashboardChannel()
	const managers = channel?.managers
	const query = trpc.listManagers.useQuery(
		{
			channelId: channel?.id,
			managers: managers
		},
		{ enabled: !!managers && !!channel?.id }
	)

	return query
}
