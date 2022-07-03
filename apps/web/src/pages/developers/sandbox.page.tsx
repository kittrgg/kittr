import { useEffect } from "react"
import {logInfo} from '@kittr/logger/nextjs'

export default function Sandbox() {
	useEffect(() => {
		logInfo("This is a test.")
	}, [])

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
