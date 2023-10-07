import { prisma } from '@kittr/prisma';

export const getPaginatedChannels = async ({ skip = 0, take = 10 }) => {
	return prisma.channel.findMany({
		where: {
			profile: {
				hasProfileImage:
					process.env.VERCEL_ENV === 'development' ? undefined : true,
			},
		},
		orderBy: {
			viewCount: 'desc',
		},
		skip,
		take,
		include: {
			profile: true,
			links: true,
		},
	});
};
