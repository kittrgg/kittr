import { useDashboardChannel } from "@Hooks/api/useDashboardChannel"
import { trpc } from "@Server/createHooks"

export const useChannelManagers = () => {
	const { data: channel } = useDashboardChannel()
	const managers = channel?.managers
	const query = trpc.useQuery(
		[
			"channels/managers/list",
			{
				channelId: channel?.id!,
				managers: managers!
			}
		],
		{ enabled: !!managers && !!channel?.id }
	)

	return query
}
