import { useDashboardChannel } from "@Hooks/api/useDashboardChannel"
import { useSocket } from "../../pages/dashboard.page"
import { InferMutationInput, InferMutationOutput, TMutation } from "@Server/index"
import { UseTRPCMutationOptions } from "@trpc/react"
import { trpc } from "@Server/createHooks"

interface Params<T extends TMutation> {
	path: T
	inputs: InferMutationInput<T>
	opts?: UseTRPCMutationOptions<InferMutationInput<T>, any, InferMutationOutput<T>>
}

/** A trpc.useMutation that, by default, includes an onSettled handler for reporting that a change occurred to the socket server.
 *
 * If you choose to overwrite the onSettled handler, you will need to do this work yourself if needed.
 */
export const useDashboardMutator = <T extends TMutation>({ path, inputs, opts }: Params<T>) => {
	const { data } = useDashboardChannel()
	const socket = useSocket()

	const mutation = trpc.useMutation(path, opts)

	mutation.mutate = () =>
		mutation.mutate(inputs, {
			...opts,
			onSettled: (...args) => {
				socket.emit(`dashboardChangeReporter`, data?.id)
				opts?.onSettled?.(...args)
			}
		})

	return mutation
}
