export const asyncDelay = async (period: number) => {
	let timeout: any = null

	return await new Promise((resolve) => {
		timeout = setTimeout(() => {
			resolve(null)
			clearTimeout(timeout)
		}, period)
	})
}
