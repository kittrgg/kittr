'use client';

import { logCreatorPopularityMetric } from '@kittr/metrics';
import { useEffect } from 'react';

export function LogProfileMetrics({
  channelDisplayName,
  channelId,
  channelUrlSafeName,
}: {
  channelDisplayName: string;
  channelUrlSafeName: string;
  channelId: string;
}) {
  useEffect(() => {
    logCreatorPopularityMetric({
      type: 'profile',
      channelDisplayName,
      channelId,
      channelUrlSafeName,
    });
  }, [channelDisplayName, channelId, channelUrlSafeName]);

  return null;
}
