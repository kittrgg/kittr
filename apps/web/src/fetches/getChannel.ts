import 'server-only';

import { cache } from 'react';
import { prisma } from '@kittr/prisma';

export const getChannel = cache(async (urlSafeName: string) => {
	const channel = await prisma.channel.findUnique({
		where: {
			urlSafeName,
		},
		include: {
			profile: {
				include: {
					brandColors: true,
					channelPcSpecs: true,
					affiliates: true,
					setupPhotos: true,
				},
			},
			links: true,
			plan: true,
			games: {
				select: {
					backgroundImageUrl: true,
					titleImageUrl: true,
					displayName: true,
					urlSafeName: true,
					developer: true,
					platforms: true,
					genres: true,
				},
			},
			_count: { select: { warzoneKits: true, warzoneTwoKits: true } },
		},
	});

	return channel;
});

export type GetChannel = Awaited<ReturnType<typeof getChannel>>;
