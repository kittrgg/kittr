import { notFound } from 'next/navigation';
import { prisma } from '@kittr/prisma';
import { getTopCreatorPopularities } from '@kittr/metrics';
import type { Params } from './types';
import { Header } from '@/app/(creators)/Header';
import {
  getKitsByGame,
  getShopCode,
} from '@/app/(creators)/(game)/channel/[channel]/[game]/fetches';
import { getChannel } from '@/fetches/getChannel';
import { LightRay } from '@/app/(creators)/LightRay';
import { KitCard } from '@/app/(creators)/(game)/channel/[channel]/[game]/components/KitCard';

export const revalidate = 60;

export async function generateStaticParams() {
  const limit = process.env.VERCEL_ENV === 'production' ? 30 : 1;

  const topCreators = await getTopCreatorPopularities({
    limit,
    field: 'channelId',
  });

  if (!topCreators) {
    throw new Error('Failed fetching top creators.');
  }

  const channelNames = await prisma.channel.findMany({
    where: {
      id: {
        in: topCreators.map((creator) => creator.id),
      },
    },
    select: { urlSafeName: true, games: { select: { urlSafeName: true } } },
  });

  return channelNames
    .map((channel) =>
      channel.games.map((game) => ({
        game: game.urlSafeName,
        channel: channel.urlSafeName,
      })),
    )
    .flat();
}

export async function Page({ params }: { params: Params }) {
  const channel = await getChannel(params.channel);

  const shopCode = await getShopCode({
    channelUrlSafeName: params.channel,
    gameUrlSafeName: params.game,
  });

  if (!channel) {
    return notFound();
  }

  const kits = await getKitsByGame({
    game: params.game,
    channelName: params.channel,
  });

  return (
    <>
      <Header
        channelUrlSafeName={channel.urlSafeName}
        shopCode={shopCode?.code}
      />
      <LightRay className="absolute -top-[20rem] -left-0 -rotate-12 w-[20rem] h-[50rem] scale-y-150 opacity-50" />
      <div className="relative z-10 grid grid-flow-row grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {kits
          .sort((a, b) => a.base.displayName.localeCompare(b.base.displayName))
          .sort((a, b) => Number(b.featured) - Number(a.featured))
          .map((kit, index) => {
            return (
              <KitCard
                arrIndex={index}
                channel={params.channel}
                game={params.game}
                key={kit.id}
                kit={kit}
              />
            );
          })}
      </div>
    </>
  );
}

export default Page;
