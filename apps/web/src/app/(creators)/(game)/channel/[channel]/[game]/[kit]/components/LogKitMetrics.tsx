'use client';

import type { CompleteCreatorPopularityMetric } from '@kittr/metrics';
import { useLogger } from '@kittr/metrics';

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
  const logger = useLogger();

  logger.info('Creator popularity', {
    metric: 'kit',
    channelDisplayName,
    channelId,
    channelUrlSafeName,
    gameUrlSafeName,
    kitBaseDisplayName,
  } as CompleteCreatorPopularityMetric<'kit'>);

  return null;
}
