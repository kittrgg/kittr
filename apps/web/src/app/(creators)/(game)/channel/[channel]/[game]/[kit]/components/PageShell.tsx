'use client';

import { useState } from 'react';
import { Button } from '@kittr/ui/new';
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
      <div className="z-10">
        {kits.map((kit, index) => {
          return (
            <Button key={kit.id} onClick={() => setKitIndex(index)}>
              {kit.base.displayName} - {kit.customTitle}
            </Button>
          );
        })}
      </div>
      <Content kit={kits[kitIndex]} youTubeAutoplay={youTubeAutoplay} />
    </>
  );
}
