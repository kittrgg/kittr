const TestPage = ({ result }: any) => {
	return (
		<div>
			<p>Make something great with the TestPage component here!</p>
			<p>{result}</p>
		</div>
	)
}

export default TestPage

export const getServerSideProps = async () => {
	const result = await fetch("https://example.com/asdfkjhsladyr").then((res) => res.json())

	const someOtherThing = result.someOtherThing

	return {
		props: {
			result: someOtherThing || "The fetch failed."
		}
	}
}
