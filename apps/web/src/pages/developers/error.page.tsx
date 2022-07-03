const Inner = () => {
	const obj = { test: "thing" }

	return <button>{obj}</button>
}


const TestErrorBoundary = () => {
	return (
		<Inner />
	)
}

export default TestErrorBoundary
