/**
	 * @params
	 * minimum value, maximum value
	 *
	 * @returns
	 * Returned value within range
	 *
	 */
type IFn = (min: number, max: number) => string

/** Get a random number within the specified range. */
export const getRandomNumFromRange: IFn = (min, max) => {
	return (Math.random() * (max - min) + min).toFixed(2)
}
