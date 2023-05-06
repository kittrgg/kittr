/**
 * Trim a prefix off of the front of a string.
 * @example
 * trimPrefix("foobar", "bar") returns "bar"
 */
export const trimPrefix = (prefix: string, string: string) => {
	if (string.startsWith(prefix)) {
		return string.split(prefix)[1]
	}
	return string
}
