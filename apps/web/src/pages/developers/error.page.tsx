const Inner = () => {
	const obj = { test: "thing" }

	// return <button>{obj}</button>
	return <button>test</button>
}

const TestErrorBoundary = () => {
	return <Inner />
}

export default TestErrorBoundary
