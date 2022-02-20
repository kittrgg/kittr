// TODO: The "query" parameter needs to be able to infer it's type by what got passed into the function when it was called.

// This function is used to set the default values for the pager.
// This values for skip and take come all the way from the request from the client.
// If they are not provided, we will use a default value as provided in the function's parameters.
export const setPagerDefaults = <T extends { skip?: string; take?: string }>(
	query: T,
	skipDefault: number,
	takeDefault: number
) => {
	return {
		...query,
		skip: Number(query.skip ?? skipDefault),
		take: Number(query.take ?? takeDefault)
	}
}
