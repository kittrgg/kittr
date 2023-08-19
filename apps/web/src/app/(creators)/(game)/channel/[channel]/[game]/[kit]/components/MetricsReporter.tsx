'use client';

import { log } from '@kittr/metrics';
import { useEffect } from 'react';

export const MetricsReporter = ({
  channelDisplayName,
  game,
  kitBaseDisplayName,
}: {
  channelDisplayName: string;
  game: string;
  kitBaseDisplayName: string;
}) => {
  useEffect(() => {
    log.info(`Kit page for creator ${channelDisplayName}`, {
      channel: channelDisplayName,
      game,
      kit: decodeURI(kitBaseDisplayName),
    });
  }, []);

  return null;
};
