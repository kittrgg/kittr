import { Spinner } from "@Components/shared"
import { captureException } from "@Services/captureException"
import { download } from "@Services/firebase/storage"
import { useEffect } from "react"
import { useQuery } from "react-query"

interface FirebaseResolverProps {
	path: string
	noSpinner?: boolean
	render: (data: any) => JSX.Element
}

export const FirebaseStorageResolver = ({ path, noSpinner, render }: FirebaseResolverProps) => {
	const { data, error, isLoading } = useQuery<any, any>(path, () => download(path))
	const spinner = noSpinner ? <></> : <Spinner width="20%" />

	useEffect(() => {
		if (error) {
			captureException(error)
		}
	}, [error])

	return isLoading ? spinner : render(data)
}
