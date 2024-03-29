import { getAll, get } from '@vercel/edge-config';
import { z } from 'zod';

const edgeConfigShape = z.object({
	homeAppPage: z.boolean().default(false),
	gamesAppPage: z.boolean().default(false),
	playersAppPage: z.boolean().default(false),
	playerProfilePages: z.boolean().default(false),
});

export type EdgeConfig = z.infer<typeof edgeConfigShape>;

export const getAllFlags = async (): Promise<EdgeConfig> => {
	return edgeConfigShape.parse(await getAll());
};
export const getFlag = async <T extends keyof EdgeConfig>(
	key: T,
): Promise<EdgeConfig[T]> => {
	return edgeConfigShape.pick({ [key]: true }).parse({ [key]: await get(key) })[
		key
	];
};
