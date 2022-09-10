import { useState } from "react"
import { SwallowErrorBoundary, NoSwallowErrorBoundary } from "@Components/shared/ErrorBoundary"

const Inner = () => {
	const [doError, setDoError] = useState(false)

	const obj = { test: "thing" }

	return <button onClick={() => setDoError(true)}>{!doError ? "Push me to cause an error." : obj}</button>
}

const TestErrorBoundary = () => (
	<>
		<SwallowErrorBoundary>
			<Inner />
		</SwallowErrorBoundary>
		<NoSwallowErrorBoundary>
			<Inner />
		</NoSwallowErrorBoundary>
	</>
)

export default TestErrorBoundary
