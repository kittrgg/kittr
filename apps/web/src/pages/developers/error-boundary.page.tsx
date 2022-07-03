import { ErrorBoundary } from "@Components/shared/ErrorBoundary"

const Inner = () => {
	const tossError = () => {
		throw new Error("Hey, I am in a boundary!")
	}

	return <button onClick={tossError}>do a thing</button>
}

const TestErrorBoundary = () => {
	return (
		<ErrorBoundary>
			<Inner />
		</ErrorBoundary>
	)
}

export default TestErrorBoundary
