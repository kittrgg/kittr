import { trpc as trpcClient } from "@kittr/trpc/client"

const getBaseUrl = (): string => {
	if (typeof window !== "undefined") {
		return ""
	}

	if (process.env.VERCEL_URL) {
		return `https://${process.env.VERCEL_URL}`
	}

	return `http://localhost:${process.env.PORT ?? 3000}`
}

export const trpc = trpcClient({
	queryClientConfig: {
		defaultOptions: {
			queries: {
				refetchOnWindowFocus: false,
				refetchOnMount: false
			}
		}
	},
	url: `${getBaseUrl()}/api/trpc`
})
