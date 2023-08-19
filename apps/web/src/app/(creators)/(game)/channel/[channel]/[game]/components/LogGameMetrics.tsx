'use client';

import { logCreatorPopularityMetric } from '@kittr/metrics';
import { useEffect } from 'react';

export function LogKitMetrics({
  channelDisplayName,
  channelId,
  channelUrlSafeName,
  gameUrlSafeName,
}: {
  channelDisplayName: string;
  channelId: string;
  channelUrlSafeName: string;
  gameUrlSafeName: string;
}) {
  useEffect(() => {
    logCreatorPopularityMetric({
      type: 'game',
      channelDisplayName,
      channelId,
      channelUrlSafeName,
      gameUrlSafeName,
    });
  }, [channelDisplayName, channelId, gameUrlSafeName, channelUrlSafeName]);

  return null;
}
