import { prisma } from '@kittr/prisma';

export const updateProfileImage = async ({
	channelId,
}: {
	channelId: string;
}) => {
	const result = await prisma.channel.update({
		where: { id: channelId },
		data: {
			profile: {
				update: {
					hasProfileImage: true,
				},
			},
		},
	});

	return result;
};
