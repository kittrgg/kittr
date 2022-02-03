export const isFetchError = <T>(result: T | NextClientEndpointError): result is NextClientEndpointError => {
	return (result as NextClientEndpointError).error !== undefined
}

// export const isFetchSuccess = <T>(result: T | NextClientEndpointError): result is T => {
// 	return (result as T).error === undefined
// }
