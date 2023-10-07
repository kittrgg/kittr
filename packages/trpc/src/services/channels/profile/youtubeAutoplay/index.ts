import { prisma } from '@kittr/prisma';

export const toggleYoutubeAutoplay = async ({
	channelId,
	shouldYoutubeAutoplay,
}: {
	channelId: string;
	shouldYoutubeAutoplay: boolean;
}) => {
	const result = await prisma.channelProfile.update({
		where: {
			channelId,
		},

		data: {
			youtubeAutoplay: shouldYoutubeAutoplay,
		},
	});

	return result;
};
