/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
'use client';

import type { CompleteCreatorPopularityMetric } from '@kittr/metrics';
import { useLogger } from '@kittr/metrics';

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
  const logger = useLogger();

  logger.info('Creator popularity', {
    metric: 'game',
    channelDisplayName,
    channelId,
    channelUrlSafeName,
    gameUrlSafeName,
  } as CompleteCreatorPopularityMetric<'game'>);

  return null;
}
