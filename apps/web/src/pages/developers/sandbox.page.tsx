export default function Sandbox() {
	return (
		<div>
			I am a sandbox for the developers.
			{/* <Title>Do the thing</Title> */}
			{/* <pre>{JSON.stringify(hello.data, null, 2)}</pre> */}
		</div>
	)
}

export const getStaticProps = async () => {

	return {
		props: { }
	}
}
