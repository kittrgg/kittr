import { useLogger, withAxiom } from 'next-axiom';
import { client } from './client';

export { useLogger, withAxiom };

interface GetCreatorPopularities {
  limit: number;
  field: 'channelId' | 'displayName';
}

export interface CompleteCreatorPopularityMetric<T> {
  metric: T;
  channelId: string;
  channelUrlSafeName: string;
  channelDisplayName: string;
  gameUrlSafeName: T extends 'game' | 'kit' ? string : unknown;
  kitBaseDisplayName: T extends 'kit' ? string : unknown;
}

type CreatorPopularityMetric<T extends 'game' | 'kit' | 'profile'> =
  T extends 'profile'
    ? Omit<
        CompleteCreatorPopularityMetric<T>,
        'gameUrlSafeName' | 'kitBaseDisplayName'
      >
    : T extends 'game'
    ? Omit<CompleteCreatorPopularityMetric<T>, 'kitBaseDisplayName'>
    : CompleteCreatorPopularityMetric<T>;

export const logCreatorPopularityMetric = <
  T extends 'game' | 'kit' | 'profile',
>(
  logData: CreatorPopularityMetric<T>,
) => {
  return useLogger().info('Creator popularity', logData);
};

export const getTopCreatorPopularities = async (
  opts?: Partial<GetCreatorPopularities>,
) => {
  const defaultOptions: GetCreatorPopularities = {
    limit: 10,
    field: 'channelId',
  };
  const options = { ...defaultOptions, ...opts };
  const { limit } = options;

  try {
    if (limit > 1000) {
      throw new Error('Axiom queried for more than 1000 logs.');
    }

    return client
      .query(
        `['vercel']
          | where level == "info" and['fields.metric'] contains "Creator popularity" and['vercel.environment'] == "production"
          | summarize count() by ['fields.channelId'] | limit(${limit})`,
      )
      .then((res) =>
        res.buckets.totals?.map((total) => ({
          id: total.group['fields.channelId'] as string,
          pageViewCount: total.aggregations?.[0].value as number,
        })),
      );
  } catch (error) {
    if (error instanceof Error) {
      // eslint-disable-next-line no-console
      console.error('Axiom querying error.');
      throw error;
    }

    throw new Error('Axiom querying error.');
  }
};

interface GetRisingCreators {
  skipTopCreators?: number;
  limit: number;
}

/** Skips top 10 creators and gets next 10 by default. */
export const getRisingCreators = async (opts?: GetRisingCreators) => {
  const defaultOptions: Required<GetRisingCreators> = {
    limit: 10,
    skipTopCreators: 10,
  };
  const options = { ...defaultOptions, ...opts };
  const { limit, skipTopCreators } = options;

  try {
    if (limit > 1000) {
      throw new Error('Axiom queried for more than 1000 logs.');
    }

    const topCreators = await client
      .query(
        `['vercel']
          | where level == "info" and['fields.metric'] contains "Creator popularity" and['vercel.environment'] == "production"
          | summarize count() by ['fields.channelId'] | limit(${skipTopCreators})`,
      )
      .then((res) =>
        res.buckets.totals?.map((total) => ({
          id: total.group['fields.channelId'] as string,
          pageViewCount: total.aggregations?.[0].value as number,
        })),
      );

    if (!topCreators) {
      throw new Error('No top creator list was found.');
    }

    const topCreatorsToOmit = topCreators
      .map((creator) => `"${creator.id}"`)
      .join(', ');

    const queryString = `
    ['vercel']
    | where level == "info" and['fields.metric'] contains "Creator popularity" and['vercel.environment'] == "production" and['fields.channelId'] !in~ (${topCreatorsToOmit})
    | summarize count() by['fields.channelId']
    | limit (10)
    `;

    const result = await client.query(queryString).then((res) =>
      res.buckets.totals?.map((total) => ({
        id: total.group['fields.channelId'] as string,
        pageViewCount: total.aggregations?.[0].value as number,
      })),
    );

    return result;
  } catch (error) {
    if (error instanceof Error) {
      // eslint-disable-next-line no-console
      console.error('Axiom querying error.');
      throw error;
    }

    throw new Error('Axiom querying error.');
  }
};
