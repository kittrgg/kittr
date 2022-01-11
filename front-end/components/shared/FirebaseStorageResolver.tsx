import { Spinner } from "@Components/shared"
import firebase from "firebase/app"
import "firebase/storage"
import { useEffect } from "react"
import { useQuery } from "react-query"
// @ts-ignore
import { useRollbar } from "@rollbar/react"

interface FirebaseResolverProps {
	path: string
	noSpinner?: boolean
	render: (data: any) => JSX.Element
}

export const FirebaseStorageResolver = ({ path, noSpinner, render }: FirebaseResolverProps) => {
	const rollbar = useRollbar()
	const { data, error, isLoading } = useQuery(path, () => firebase.storage().ref().child(path).getDownloadURL())
	const spinner = noSpinner ? <></> : <Spinner width="20%" />

	useEffect(() => {
		if (error) {
			rollbar.error(error)
		}
	}, [error, rollbar])

	return isLoading ? spinner : render(data)
}
