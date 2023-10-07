/**
 * Convert a string into a url safe version.
 * Please not that there are probably many characters not taken care of here and you may find edge cases.
 * */
export const toURL = (str: string): string => {
	return str.replace(/\s+/g, '-').replace(/[^\w-]/g, '_');
};
