import { prisma, Prisma } from '@kittr/prisma';

const include = Prisma.validator<Prisma.ChannelInclude>()({
	profile: true,
	managers: true,
});

interface Params {
	/** Firebase uid for the manager */
	uid: string;
}

export const getManagerChannels = async ({ uid }: Params) => {
	const result = await prisma.channel.findMany({
		where: {
			managers: {
				some: {
					firebaseId: uid,
				},
			},
		},
		include,
	});

	return result;
};

export type getManagerChannelsReturnType = Prisma.PromiseReturnType<
	typeof getManagerChannels
>;
