import { getDownloadURL, ref } from 'firebase/storage';
import { storage } from '..';

/** Return the path to the Firebase document. */
export const download = async (
	fileName: string,
	handler?: Function,
): Promise<string> => {
	try {
		const storageRef = ref(storage, fileName);
		const path = await getDownloadURL(storageRef);

		// eslint-disable-next-line @typescript-eslint/no-unsafe-return -- I'm bad at TypeScript.
		if (path && handler) return handler(path);
		return path;
	} catch (err) {
		// eslint-disable-next-line @typescript-eslint/no-unsafe-return -- I'm bad at TypeScript.
		return handler?.(null);
	}
};
