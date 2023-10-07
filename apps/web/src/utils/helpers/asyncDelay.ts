export const asyncDelay = async (period: number) => {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	let timeout: any = null;

	return await new Promise((resolve) => {
		timeout = setTimeout(() => {
			resolve(null);
			clearTimeout(timeout);
		}, period);
	});
};
