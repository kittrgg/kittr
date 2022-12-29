import { useDashboardChannel } from "@Hooks/api/useDashboardChannel"
import { trpc } from "@Server/createTRPCNext"

export const useChannelManagers = () => {
	const { data: channel } = useDashboardChannel()
	const managers = channel?.managers
	const query = trpc.useQuery(
		[
			"channels/managers/list",
			{
				// eslint-disable-next-line @typescript-eslint/no-non-null-assertion, @typescript-eslint/no-non-null-asserted-optional-chain
				channelId: channel?.id!,
				// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
				managers: managers!
			}
		],
		{ enabled: !!managers && !!channel?.id }
	)

	return query
}
