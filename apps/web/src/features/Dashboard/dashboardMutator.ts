import { useDashboardChannel } from "@Hooks/api/useDashboardChannel"
import { MutationFunction, useMutation } from "react-query"
import { useSocket } from "../../pages/dashboard.page"

export const useDashboardMutator = <TData, TError, Variables = unknown>(
	mutationFn: MutationFunction<TData, Variables>
) => {
	const { data } = useDashboardChannel()
	const socket = useSocket()

	return useMutation<TData, TError, Variables>(mutationFn, {
		onSettled: () => {
			socket.emit(`dashboardChangeReporter`, data?.id)
		}
	})
}
