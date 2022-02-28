import { IKit } from "@kittr/types/kits"

/** Pass in a kit. Will return the baseName and custom title (if applicable) as a URL safe string. */
export const basePlusTitleToUrlSafe = (kit: IKit): string => {
	const { displayName: baseName } = kit.base
	const urlSafeBase = baseName.replace(/ /g, "-")

	const { customTitle } = kit.userData
	const urlSafeTitle = customTitle.replace(/ /g, "-").toLowerCase()

	return `${urlSafeBase}${urlSafeTitle ? "-" + urlSafeTitle : ""}`
}
