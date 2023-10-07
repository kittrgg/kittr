interface IParams {
	/** Pre-defined array of strings to use for the order of the returned array. */
	sortingArray: string[];
	/** If the element types is an object, the key on the array's objects to use for the sort. */
	keyToSort?: string;
	/** If the element type is an array, the index to use for the sort. */
	indexToSort?: number;
	/** The array to be sorted. */
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	array: any[];
}

/**
 * Sorts an array by using a different array of strings to create an arbitrary order.
 *
 * Accepts element types of objects or arrays.
 * Use keyToSort if you are sorting an array of objects.
 * Use indexToSort if you are soring an array of arrays.
 *
 * Not meant for large quantities of data. It will very quickly show performance problems.
 *
 * Any unaccounted for strings will be placed at the end of the array (possibly in an unordered state).
 *
 */
export const customOrderArray = <T>({
	sortingArray,
	keyToSort,
	indexToSort,
	array,
}: IParams): T[] => {
	if (indexToSort !== undefined) {
		return (
			array
				// Create a new instance of the array with slice
				.slice()
				// eslint-disable-next-line @typescript-eslint/no-explicit-any
				.sort((a: any, b: any) => {
					if (!sortingArray.includes(a[indexToSort])) return 1;
					if (!sortingArray.includes(b[indexToSort])) return -1;
					return (
						sortingArray.indexOf(a[indexToSort]) -
						sortingArray.indexOf(b[indexToSort])
					);
				})
		);
	}

	if (keyToSort) {
		const arr = array
			// Create a new instance of the array with slice
			.slice()
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			.sort((a: any, b: any) => {
				if (!sortingArray.includes(a[keyToSort])) return 1;
				if (!sortingArray.includes(b[keyToSort])) return -1;
				return (
					sortingArray.indexOf(a[keyToSort]) -
					sortingArray.indexOf(b[keyToSort])
				);
			});
		return arr;
	}
	return array;
};
