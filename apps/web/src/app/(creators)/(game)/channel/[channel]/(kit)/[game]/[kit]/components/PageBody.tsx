import { Suspense } from 'react';
import type { WarzoneTwoKitOptionTuning } from '@kittr/prisma';
import { typographyVariants } from '@kittr/ui/new';
import { ExternalContent } from '@/app/(creators)/(game)/channel/[channel]/(kit)/[game]/[kit]/components/ExternalContent';
import { MoreKits } from '@/app/(creators)/(game)/channel/[channel]/(kit)/[game]/[kit]/components/MoreKits';
import { Options } from '@/app/(creators)/(game)/channel/[channel]/(kit)/[game]/[kit]/components/Options';
import type { Kits } from '@/app/(creators)/(game)/channel/[channel]/(kit)/[game]/[kit]/types';
import type { AllChannelGamesKits } from '@/app/(creators)/(game)/channel/[channel]/[game]/types';
import { Popularity } from '@/app/(creators)/(game)/channel/[channel]/(kit)/[game]/[kit]/components/Popularity';

export function PageBody({
  kit,
  allKits,
  youTubeAutoplay,
  channel,
  game,
}: {
  allKits: AllChannelGamesKits;
  kit: Kits[number] & {
    tuning?: WarzoneTwoKitOptionTuning[];
  };
  youTubeAutoplay: boolean;
  channel: string;
  game: string;
}) {
  const kitWithTunings = kit.options.map((opt) => {
    if (!kit.tuning) return opt;

    const tuning = kit.tuning.flat().find((t) => opt.id === t.kitOptionId);
    return { ...opt, tuningHorz: tuning?.horz, tuningVert: tuning?.vert };
  });

  return (
    <div className="relative z-10 flex flex-col gap-10">
      <h1 className={typographyVariants({ presets: 'h1' })}>
        {kit.base.displayName}
      </h1>
      <Options options={kitWithTunings} />
      <p>{kit.base.blurb}</p>
      <ExternalContent kit={kit} youTubeAutoplay={youTubeAutoplay} />
      <Popularity />
      <Suspense>
        <MoreKits
          activeKit={kit}
          allKits={allKits}
          channel={channel}
          game={game}
        />
      </Suspense>
    </div>
  );
}
