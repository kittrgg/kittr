import { useDashboardChannel } from "@Hooks/api/useDashboardChannel"
import { trpc } from "@Server/createHooks"
import { InferMutationInput, InferMutationOutput, TMutation } from "@Server/index"
import { UseTRPCMutationOptions } from "@trpc/react"
import { useSocket } from "../../pages/dashboard.page"

interface Params<T extends TMutation> {
	path: T
	opts?: UseTRPCMutationOptions<InferMutationInput<T>, any, InferMutationOutput<T>>
}

/** A trpc.useMutation that, by default, includes an onSettled handler for reporting that a change occurred to the socket server.
 *
 * If you choose to overwrite the onSettled handler, you will need to do this work yourself if needed.
 */
export const useDashboardMutator = <T extends TMutation>({ path, opts }: Params<T>) => {
	const { data } = useDashboardChannel()
	const socket = useSocket()

	const mutation = trpc.useMutation(path, {
		...opts,
		onSettled: (...args) => {
			socket.emit(`dashboardChangeReporter`, data?.id)
			opts?.onSettled?.(...args)
		}
	})

	return mutation
}
