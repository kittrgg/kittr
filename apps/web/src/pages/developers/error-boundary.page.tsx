import { AdErrorBoundary } from "@Components/shared/ErrorBoundary"
import dynamic from "next/dynamic"

const Inner = () => {
	const obj = { test: "thing" }

	return <button>{obj}</button>
}

const NoSsr = dynamic(() => Promise.resolve(Inner), { ssr: false })

const TestErrorBoundary = () => {
	return (
		<AdErrorBoundary>
			<NoSsr />
		</AdErrorBoundary>
	)
}

export default TestErrorBoundary
