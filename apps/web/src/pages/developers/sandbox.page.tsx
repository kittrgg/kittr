import { useEffect } from "react"
import { trpc } from "@Server/createHooks"
import { logInfo } from "@kittr/logger/nextjs"

export default function Sandbox() {
	// useEffect(() => {
	// 	logInfo("Test from client")
	// }, [])

	// @ts-ignore
	const query = trpc.useQuery(["no-exist"], {
		// onSettled: () => logInfo("settled"),
		// onSuccess: () => logInfo("onsuccess"),
		// onError: () => {
		// 	console.log("I did the call site.")
		// 	logInfo("ya beefed it")
		// }
	})

	return (
		<div>
			I am a sandbox for the developers.
			{/* <Title>Do the thing</Title> */}
			{/* <pre>{JSON.stringify(hello.data, null, 2)}</pre> */}
			<p>{JSON.stringify(query.data)}</p>
		</div>
	)
}
