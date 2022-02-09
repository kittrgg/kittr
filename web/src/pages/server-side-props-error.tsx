const TestPage = ({ result }: any) => {
	return (
		<div>
			<p>Make something great with the TestPage component here!</p>
			<p>{result}</p>
		</div>
	)
}

export default TestPage

export const getStaticProps = async () => {
	const result = await fetch("https://google.com/asjkefghksaltr")

	return {
		props: {
			result: result || "The fetch failed."
		}
	}
}
