import { Star } from '@kittr/ui/icons';
import { Suspense } from 'react';
import { notFound } from 'next/navigation';
import type { Params } from './params';
import { Header } from '@/app/(creators)/Header';
import { getKitsByGame } from '@/app/(creators)/(game)/channel/[channel]/[game]/fetches';
import { KitTileImage } from '@/app/(creators)/(game)/channel/[channel]/[game]/KitTileImage';
import { getChannel } from '@/fetches/getChannel';

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
      <div className="grid grid-flow-row grid-cols-4 gap-4">
        {kits
          .sort((a, b) => Number(b.featured) - Number(a.featured))
          .map((kit) => {
            return (
              <div
                className="relative p-4 overflow-hidden border border-white rounded-lg"
                key={kit.id}
              >
                <Suspense>
                  <KitTileImage kit={kit} />
                </Suspense>
                <div className="relative z-20">
                  <p>{kit.featured ? <Star /> : null}</p>
                  <p>{kit.base.displayName}</p>
                  <p>{kit.customTitle}</p>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
}

export default Page;
