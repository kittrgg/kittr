import type { WarzoneKit, WarzoneKitBase } from '@kittr/prisma';

interface FullKit extends WarzoneKit {
	base: WarzoneKitBase;
}

/** Pass in a kit. Will return the baseName and custom title (if applicable) as a URL safe string. */
export const basePlusTitleToUrlSafe = (kit: FullKit): string => {
	const { displayName: baseDisplayName } = kit.base;
	const urlSafeBase = baseDisplayName.replace(/ /g, '-');

	const customTitle = kit.customTitle;
	const urlSafeTitle = customTitle?.replace(/ /g, '-').toLowerCase();

	return `${urlSafeBase}${urlSafeTitle ? `-${urlSafeTitle}` : ''}`;
};
