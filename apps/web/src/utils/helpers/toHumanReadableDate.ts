/** Takes in ISO formatted dates and creates a human readable version. Formats to month/day/year */
export const toHumanReadableDate = (isoDate: Date) => {
	const day = new Date(isoDate).getDate()
	const month = new Date(isoDate).getMonth() + 1
	const year = new Date(isoDate).getFullYear()

	return `${month}/${day}/${year}`
}
