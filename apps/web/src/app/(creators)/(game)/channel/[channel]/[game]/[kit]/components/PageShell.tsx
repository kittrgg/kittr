'use client';

import { useState } from 'react';
import { Button, cn } from '@kittr/ui/new';
import type { Kits } from '@/app/(creators)/(game)/channel/[channel]/[game]/[kit]/fetches';
import { Content } from '@/app/(creators)/(game)/channel/[channel]/[game]/[kit]/components/Content';

export function PageShell({
  kits,
  youTubeAutoplay,
}: {
  youTubeAutoplay: boolean;
  kits: Kits;
}) {
  const [kitIndex, setKitIndex] = useState(0);

  return (
    <>
      <div className="z-10 flex flex-row gap-4">
        {kits.map((kit, index) => {
          const text = kit.customTitle ? kit.customTitle : 'Default';

          return (
            <Button
              className={
                kitIndex === index
                  ? 'bg-white text-black hover:bg-zinc-200'
                  : 'text-zinc-100 hover:bg-zinc-700'
              }
              key={kit.id}
              onClick={() => setKitIndex(index)}
            >
              {text}
            </Button>
          );
        })}
      </div>
      <Content kit={kits[kitIndex]} youTubeAutoplay={youTubeAutoplay} />
    </>
  );
}
