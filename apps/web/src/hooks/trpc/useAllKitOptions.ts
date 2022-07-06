import { trpc } from "@Server/createHooks"
import { captureException } from '@sentry/nextjs'

export const useAllKitOptions = ({ kitBaseId }: { kitBaseId: string }) => {
	const query = trpc.useQuery(["kits/bases/options/list", { kitBaseId }], {
		onError: (error) => captureException(error)
	})

	return query
}
