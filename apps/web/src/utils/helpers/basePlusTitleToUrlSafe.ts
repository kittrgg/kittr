import { CompleteKit } from "@Types/prisma"

/** Pass in a kit. Will return the baseName and custom title (if applicable) as a URL safe string. */
export const basePlusTitleToUrlSafe = (kit: CompleteKit): string => {
	const { displayName: baseDisplayName } = kit.kitBase
	const urlSafeBase = baseDisplayName.replace(/ /g, "-")

	const customTitle = kit.customTitle
	const urlSafeTitle = customTitle?.replace(/ /g, "-").toLowerCase()

	return `${urlSafeBase}${urlSafeTitle ? "-" + urlSafeTitle : ""}`
}
