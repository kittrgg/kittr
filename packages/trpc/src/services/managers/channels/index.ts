import { prisma } from '@kittr/prisma';

export const listChannels = (managerFirebaseUid: string) => {
	const result = prisma.channel.findMany({
		where: {
			managers: {
				some: {
					firebaseId: managerFirebaseUid,
				},
			},
		},
		include: {
			profile: true,
			plan: {
				select: { type: true },
			},
			managers: true,
		},
	});

	return result;
};
