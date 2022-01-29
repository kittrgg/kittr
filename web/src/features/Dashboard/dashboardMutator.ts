import { useDashboardChannel } from "@Hooks/api/useDashboardChannel"
import { MutationFunction, useMutation } from "react-query"
import { useSocket } from "../../pages/dashboard.page"

export const useDashboardMutator = (mutationFn: MutationFunction<any, any>) => {
	const { data } = useDashboardChannel()
	const socket = useSocket()

	return useMutation(mutationFn, {
		onSettled: () => {
			socket.emit(`dashboardChangeReporter`, data?._id)
		}
	})
}
