import '@/app/globals.css';

import { type ReactNode } from 'react';
import type { Metadata } from 'next';
import { getTopCreatorPopularities } from '@kittr/metrics';
import { prisma } from '@kittr/prisma';
import { notFound } from 'next/navigation';
import { SharedLayout } from '@/app/(creators)/(game)/channel/[channel]/SharedLayout';
import { generateKittrMetadata } from '@/app/generateKittrMetadata';
import type { Params } from '@/app/(creators)/(game)/channel/[channel]/[game]/types';
import { getChannel } from '@/fetches/getChannel';
import { getKitsByGame } from '@/app/(creators)/(game)/channel/[channel]/[game]/fetches';

export const revalidate = 60;

export const generateMetadata = async ({
	params,
}: {
	params: Params;
}): Promise<Metadata> => {
	const channel = await getChannel(params.channel);
	const game = await prisma.game.findFirst({
		where: { urlSafeName: params.game },
	});

	if (!channel) {
		return {
			title: 'No creator found.',
			description: "Doesn't look like anyone is here yet",
			robots: 'noindex',
		};
	}

	if (!game) {
		return {
			title: 'No game found.',
			description: "Doesn't look like a game is here yet",
			robots: 'noindex',
		};
	}

	return generateKittrMetadata({
		title: `${channel.displayName}'s ${game.displayName} - kittr`,
		description: `${channel.displayName}'s kittr profile.`,
		canonicalURL: `/channels/${channel.urlSafeName}`,
	});
};

export const generateStaticParams = async () => {
	const limit = process.env.VERCEL_ENV === 'production' ? 30 : 1;

	const topCreators = await getTopCreatorPopularities({
		limit,
		field: 'channelId',
	});

	if (!topCreators) {
		throw new Error('Failed fetching top creators.');
	}

	const urlSafeNames = await prisma.channel.findMany({
		where: {
			id: {
				in: topCreators.map((creator) => creator.id),
			},
		},
		select: { urlSafeName: true },
	});

	return urlSafeNames.map((name) => ({ channel: name.urlSafeName }));
};

export async function Layout({
	children,
	params,
}: {
	children: ReactNode;
	params: Params;
}) {
	const channel = await getChannel(params.channel);

	if (!channel) {
		return notFound();
	}

	const kits = await getKitsByGame({
		game: params.game,
		channelName: params.channel,
	});

	const kitNames: { name: string; count: number; featured: boolean }[] = [];

	kits.forEach((kit) => {
		const foundInd = kitNames.findIndex(
			(name) => name.name === kit.base.displayName,
		);

		if (foundInd === -1) {
			return kitNames.push({
				name: kit.base.displayName,
				count: 1,
				featured: kit.featured,
			});
		}

		kitNames[foundInd].count++;
		kitNames[foundInd].featured = kitNames[foundInd].featured
			? kitNames[foundInd].featured
			: kit.featured;
	});

	return <SharedLayout params={params}>{children}</SharedLayout>;
}

export default Layout;
