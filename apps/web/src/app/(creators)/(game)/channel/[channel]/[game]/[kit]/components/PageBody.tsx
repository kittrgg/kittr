import { ExternalContent } from '@/app/(creators)/(game)/channel/[channel]/[game]/[kit]/components/ExternalContent';
import { MoreKits } from '@/app/(creators)/(game)/channel/[channel]/[game]/[kit]/components/MoreKits';
import { Options } from '@/app/(creators)/(game)/channel/[channel]/[game]/[kit]/components/Options';
import { Kits } from '@/app/(creators)/(game)/channel/[channel]/[game]/[kit]/types';
import { AllChannelGamesKits } from '@/app/(creators)/(game)/channel/[channel]/[game]/types';
import { Suspense } from 'react';

export function PageBody({
  kit,
  allKits,
  youTubeAutoplay,
  channel,
  game,
}: {
  allKits: AllChannelGamesKits;
  kit: Kits[number];
  youTubeAutoplay: boolean;
  channel: string;
  game: string;
}) {
  return (
    <div className="relative z-10 flex flex-col gap-10">
      <Options options={kit.options} />
      <p>{kit.base.blurb}</p>
      <ExternalContent kit={kit} youTubeAutoplay={youTubeAutoplay} />
      <p>TODO: popularity</p>
      <Suspense>
        <MoreKits
          channel={channel}
          game={game}
          allKits={allKits}
          activeKit={kit}
        />
      </Suspense>
    </div>
  );
}
