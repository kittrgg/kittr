import { prisma } from '@kittr/prisma';

interface Params {
	channel: string;
}

export const getRawChannelQuery = async ({ channel: urlSafeName }: Params) => {
	const rawChannel = await prisma.channel.findFirst({
		where: { urlSafeName },
		include: {
			plan: true,
		},
	});

	return rawChannel;
};
