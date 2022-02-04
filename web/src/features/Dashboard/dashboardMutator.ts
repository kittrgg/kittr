import { useDashboardChannel } from "@Hooks/api/useDashboardChannel"
import { MutationFunction, useMutation } from "react-query"
import { useSocket } from "../../pages/dashboard.page"

export const useDashboardMutator = <T, E>(mutationFn: MutationFunction<T>) => {
	const { data } = useDashboardChannel()
	const socket = useSocket()

	return useMutation<T, E>(mutationFn, {
		onSettled: () => {
			socket.emit(`dashboardChangeReporter`, data?._id)
		}
	})
}
