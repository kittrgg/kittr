/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
'use client';

import type { CompleteCreatorPopularityMetric } from '@kittr/metrics';
import { useLogger } from '@kittr/metrics';

export function LogProfileMetrics({
  channelDisplayName,
  channelId,
  channelUrlSafeName,
}: {
  channelDisplayName: string;
  channelUrlSafeName: string;
  channelId: string;
}) {
  const logger = useLogger();

  logger.info('Creator popularity', {
    type: 'profile',
    channelDisplayName,
    channelId,
    channelUrlSafeName,
  } as CompleteCreatorPopularityMetric<'profile'>);

  return null;
}
