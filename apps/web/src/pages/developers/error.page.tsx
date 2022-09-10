import { useState } from "react"
import { ErrorBoundary } from "@Components/shared/ErrorBoundary"
import { captureException } from "@Services/captureException"

const Inner = () => {
	const [doError, setDoError] = useState(false)

	const obj = { test: "thing" }

	return (
		<>
			<button onClick={() => captureException(new Error("activity queen"))}>
				{!doError ? "Push me to cause an error." : obj}
			</button>
			<button onClick={() => setDoError(true)}>{!doError ? "Push me to cause an error." : obj}</button>
		</>
	)
}

const TestErrorBoundary = () => (
	<>
		<ErrorBoundary>
			<Inner />
		</ErrorBoundary>
	</>
)

export default TestErrorBoundary
