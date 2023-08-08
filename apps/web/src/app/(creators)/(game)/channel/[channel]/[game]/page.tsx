import { Star } from '@kittr/ui/icons';
import { Suspense } from 'react';
import { notFound } from 'next/navigation';
import { cn } from '@kittr/ui/new';
import Link from 'next/link';
import type { Params } from './params';
import { Header } from '@/app/(creators)/Header';
import { getKitsByGame } from '@/app/(creators)/(game)/channel/[channel]/[game]/fetches';
import { KitTileImage } from '@/app/(creators)/(game)/channel/[channel]/[game]/KitTileImage';
import { getChannel } from '@/fetches/getChannel';
import { LightRay } from '@/app/(creators)/LightRay';

export async function Page({ params }: { params: Params }) {
  const channel = await getChannel(params.channel);

  if (!channel) {
    return notFound();
  }

  const kits = await getKitsByGame({
    game: params.game,
    channelName: params.channel,
  });

  return (
    <>
      <Header channelUrlSafeName={channel.urlSafeName} />
      <LightRay />
      <div className="relative z-10 grid grid-flow-row grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {kits
          .sort((a, b) => a.base.displayName.localeCompare(b.base.displayName))
          .sort((a, b) => Number(b.featured) - Number(a.featured))
          .map((kit) => {
            return (
              <Link
                className={cn(
                  ' border-white shadow-white',
                  kit.featured ? 'border-yellow-500 shadow-yellow-500' : '',
                  'relative p-4 overflow-hidden border rounded-lg hover:shadow bg-zinc-900 group',
                )}
                href={`/channel/${params.channel}/${params.game}/${encodeURI(
                  kit.base.displayName,
                )}`}
                key={kit.id}
              >
                <Suspense>
                  <KitTileImage kit={kit} />
                </Suspense>
                <div className="relative flex flex-col justify-between h-32">
                  <div className="flex flex-col gap-2">
                    <p>{kit.base.displayName}</p>
                    <p className="text-sm text-zinc-400">{kit.customTitle}</p>
                  </div>
                  {kit.featured ? (
                    <Star className="mt-auto ml-auto fill-yellow-500 stroke-none" />
                  ) : null}
                </div>
              </Link>
            );
          })}
      </div>
    </>
  );
}

export default Page;
