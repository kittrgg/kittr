/** Give us a string and we will capitalize the first letter of it. */
export const capitalizeFirst = (str: string): string => {
	return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};
