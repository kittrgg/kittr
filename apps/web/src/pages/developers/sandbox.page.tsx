import { trpc } from "@Server/createHooks"

export default function Sandbox () {
	// useEffect(() => {
	// 	logInfo("Test from client")
	// }, [])

	return (
		<div>
			I am a sandbox for the developers.
			{/* <Title>Do the thing</Title> */}
			{/* <pre>{JSON.stringify(hello.data, null, 2)}</pre> */}
		</div>
	)
}
