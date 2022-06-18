import { useDashboardChannel } from "@Hooks/api/useDashboardChannel"
import { trpc } from "@Server/createHooks"
import { TMutationPaths, AppRouter } from "@Server/index"
import type { ProcedureRecord, inferProcedureInput, inferProcedureOutput } from "@trpc/server"
import { TRPCClientErrorLike, UseTRPCMutationOptions } from "@trpc/react"
import { useSocket } from "../../pages/dashboard.page"

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

	const mutation = trpc.useMutation(path, {
		...opts,
		onSettled: (...args) => {
			socket.emit(`dashboardChangeReporter`, data?.id)
			opts?.onSettled?.(...args)
		}
	})

	return mutation
}
