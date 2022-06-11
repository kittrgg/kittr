import { createSSGHelpers } from "@trpc/react/ssg"
import { createContext, trpc } from "@Utils/trpc"
import superjson from "superjson"
import { appRouter } from "./api/trpc/[trpc].api"

export default function IndexPage() {
	const hello = trpc.useQuery(["hello", { text: "test!" }], {
		refetchOnWindowFocus: false,
		refetchOnMount: false,
		refetchOnReconnect: false
	})

	console.log(hello.isRefetching, hello.isFetching)

	if (!hello.data) {
		return <div>Loading...</div>
	}
	return (
		<div>
			<p>{hello.data.greeting}</p>
		</div>
	)
}

export const getStaticProps = async () => {
	const ssg = createSSGHelpers({
		router: appRouter,
		ctx: await createContext(),
		transformer: superjson
	})

	// Prefetch
	const test = await ssg.fetchQuery("hello", {
		text: "test!"
	})

	console.log({ test })

	return {
		props: {
			trpcState: ssg.dehydrate()
		}
	}
}
