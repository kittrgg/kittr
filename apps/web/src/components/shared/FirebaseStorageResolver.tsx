import { Spinner } from "@Components/shared"
import { captureException } from "@Services/captureException"
import { useEffect } from "react"
import { trpc } from "@/lib/trpc"

interface FirebaseResolverProps {
	path: string
	noSpinner?: boolean
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	render: (data: any) => JSX.Element
}

export const FirebaseStorageResolver = ({ path, noSpinner, render }: FirebaseResolverProps) => {
	 
	const { data, error, isLoading } = trpc.firebase.resolver.useQuery({ path })
	const spinner = noSpinner ? <></> : <Spinner width="20%" />

	useEffect(() => {
		if (error) {
			captureException({ name: "Firebase Resolver Error", ...error })
		}
	}, [error])

	return isLoading ? spinner : render(data)
}
