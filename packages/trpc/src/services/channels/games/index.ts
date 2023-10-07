import { prisma } from '@kittr/prisma';

export const addGame = async ({
	channelId,
	gameId,
}: {
	channelId: string;
	gameId: string;
}) => {
	const channel = await prisma.channel.update({
		where: { id: channelId },
		data: {
			games: {
				connect: {
					id: gameId,
				},
			},
		},
	});

	return channel;
};

export const deleteGame = async ({
	channelId,
	gameId,
}: {
	channelId: string;
	gameId: string;
}) => {
	const games = await prisma.channel.update({
		where: { id: channelId },
		data: {
			games: {
				disconnect: {
					id: gameId,
				},
			},
			warzoneKits: {
				deleteMany: {
					gameId,
				},
			},
		},
		select: {
			games: true,
		},
	});

	return games;
};

export const getChannelsByGame = async ({
	urlSafeName,
	skip,
	take,
}: {
	urlSafeName: string;
	skip: number;
	take: number;
}) => {
	const channels = await prisma.channel.findMany({
		where: {
			games: {
				some: {
					urlSafeName,
				},
			},
		},
		skip,
		take,
		include: {
			profile: true,
		},
		orderBy: {
			viewCount: 'desc',
		},
	});
	return channels;
};
