import { prisma } from '@kittr/prisma';

export const update = async ({
	channelId,
	hasCoverPhoto,
}: {
	channelId: string;
	hasCoverPhoto: boolean;
}) => {
	const result = await prisma.channel.update({
		where: { id: channelId },
		data: {
			profile: {
				update: {
					hasCoverPhoto,
				},
			},
		},
		select: {
			id: true,
			profile: {
				select: {
					hasCoverPhoto: true,
				},
			},
		},
	});

	return result;
};
