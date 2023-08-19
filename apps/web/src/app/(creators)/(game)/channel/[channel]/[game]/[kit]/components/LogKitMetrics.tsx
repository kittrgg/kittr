'use client';

import { logCreatorPopularityMetric } from '@kittr/metrics';
import { useEffect } from 'react';

export function LogKitMetrics({
  channelDisplayName,
  channelId,
  channelUrlSafeName,
  gameUrlSafeName,
  kitBaseDisplayName,
}: {
  channelDisplayName: string;
  channelId: string;
  channelUrlSafeName: string;
  gameUrlSafeName: string;
  kitBaseDisplayName: string;
}) {
  useEffect(() => {
    logCreatorPopularityMetric({
      type: 'kit',
      channelDisplayName,
      channelId,
      channelUrlSafeName,
      gameUrlSafeName,
      kitBaseDisplayName,
    });
  }, [
    channelDisplayName,
    channelId,
    gameUrlSafeName,
    kitBaseDisplayName,
    channelUrlSafeName,
  ]);

  return null;
}
