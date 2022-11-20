import { useSocket } from "../../pages/dashboard.page"
import { useDashboardChannel } from "@Hooks/api/useDashboardChannel"
import { trpc } from "@Server/createHooks"
import { AppRouter, TMutationPaths } from "@Server/index"
import { TRPCClientErrorLike, UseTRPCMutationOptions } from "@trpc/react"
import type { inferProcedureInput, inferProcedureOutput, ProcedureRecord } from "@trpc/server"
import { useQueryClient } from "react-query"

type inferProcedures<TObj extends ProcedureRecord<any, any, any, any, any, any>> = {
	[TPath in keyof TObj]: {
		input: inferProcedureInput<TObj[TPath]>
		output: inferProcedureOutput<TObj[TPath]>
	}
}

type TMutationValues = inferProcedures<TMutationPaths>

interface Params<T extends keyof TMutationValues & string> {
	path: T
	opts?: UseTRPCMutationOptions<
		TMutationValues[T]["input"],
		TRPCClientErrorLike<AppRouter>,
		TMutationValues[T]["output"]
	>
}

/** A trpc.useMutation that, by default, includes an onSettled handler for reporting that a change occurred to the socket server.
 *
 * If you choose to overwrite the onSettled handler, you will need to do this work yourself if needed.
 */
export const useDashboardMutator = <T extends keyof TMutationValues & string>({ path, opts }: Params<T>) => {
	const { data } = useDashboardChannel()
	const socket = useSocket()
	const queryClient = useQueryClient()

	const mutation = trpc.useMutation(path, {
		...opts,
		onSettled: (...args) => {
			// Need to make dashboard refetch
			queryClient.invalidateQueries("channels/dashboard")

			socket.emit(`dashboardChangeReporter`, data?.id)
			opts?.onSettled?.(...args)
		}
	})

	return mutation
}
