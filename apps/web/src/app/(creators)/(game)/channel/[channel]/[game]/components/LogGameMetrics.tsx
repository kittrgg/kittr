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

	if (typeof window === 'undefined') return null;

	logger.info('Creator popularity', {
		metric: 'game',
		channelDisplayName,
		channelId,
		channelUrlSafeName,
		gameUrlSafeName,
	} as CompleteCreatorPopularityMetric<'game'>);

	return null;
}
