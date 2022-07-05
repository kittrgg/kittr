import { useState } from "react"

const Inner = () => {
	const [doError, setDoError] = useState(false)

	const obj = { test: "thing" }

	return <button onClick={() => setDoError(true)}>{!doError ? "Push me to cause an error." : obj}</button>
	// return <button>test</button>
}

const TestErrorBoundary = () => {
	return <Inner />
}

export default TestErrorBoundary
