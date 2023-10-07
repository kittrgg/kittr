import type { NextClientEndpointError } from '@kittr/types';

export const isFetchError = <T>(
	result: NextClientEndpointError | T,
): result is NextClientEndpointError => {
	return (result as NextClientEndpointError).error !== undefined;
};
