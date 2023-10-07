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

	if (typeof window === 'undefined') return null;

	logger.info('Creator popularity', {
		metric: 'profile',
		channelDisplayName,
		channelId,
		channelUrlSafeName,
	} as CompleteCreatorPopularityMetric<'profile'>);

	return null;
}
