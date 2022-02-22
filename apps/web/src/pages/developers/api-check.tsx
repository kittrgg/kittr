import fetch from "@Utils/fetch"
import { useQuery } from "react-query"

const ApiCheck = () => {
	const { data, isLoading, error, refetch } = useQuery("ping", () => fetch.get("/"))

	if (isLoading) return <p>Loading...</p>
	if (error) return <p>Error: {JSON.stringify(error)}</p>

	return (
		<div>
			{JSON.stringify(data)}

			<div>
				<button onClick={() => refetch()}>Refetch</button>
			</div>
		</div>
	)
}

export default ApiCheck
