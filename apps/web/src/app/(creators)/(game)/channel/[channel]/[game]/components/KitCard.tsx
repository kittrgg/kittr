import { Star } from '@kittr/ui/icons';
import { cn } from '@kittr/ui/new';
import Link from 'next/link';
import { Suspense } from 'react';
import type { AllChannelGamesKits } from '@/app/(creators)/(game)/channel/[channel]/[game]/types';
import { KitTileImage } from '@/app/(creators)/(game)/channel/[channel]/[game]/components/KitTileImage';

export function KitCard({
  kit,
  game,
  channel,
  arrIndex,
}: {
  kit: AllChannelGamesKits[number];
  game: string;
  channel: string;
  arrIndex: number;
}) {
  return (
    <Link
      className={cn(
        ' border-white shadow-white',
        kit.featured ? 'border-yellow-500 shadow-yellow-500' : '',
        `relative p-4 overflow-hidden border rounded-lg hover:shadow focus:shadow bg-zinc-900 group animate-fade-in opacity-0`,
      )}
      href={`/channel/${channel}/${game}/${encodeURI(kit.base.displayName)}`}
      key={kit.id}
      style={{
        animationDelay: `${arrIndex * 25}ms`,
        animationFillMode: 'forwards',
      }}
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
}
