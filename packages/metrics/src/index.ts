import { useLogger, withAxiom } from 'next-axiom';
// import { client } from './client';

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
  useLogger().info('Creator popularity', logData);
};

export const getTopCreatorPopularities = async (
  // eslint-disable-next-line @typescript-eslint/no-unused-vars -- Working here...
  opts?: Partial<GetCreatorPopularities>,
): Promise<
  | {
      id: string;
      pageViewCount: number;
    }[]
  | undefined
  // eslint-disable-next-line @typescript-eslint/require-await -- Working here...
> => {
  // const defaultOptions: GetCreatorPopularities = {
  //   limit: 10,
  //   field: 'channelId',
  // };
  // const options = { ...defaultOptions, ...opts };
  // const { limit } = options;

  try {
    // if (limit > 1000) {
    //   throw new Error('Axiom queried for more than 1000 logs.');
    // }

    const result = [
      {
        id: '611efbf690fdff000917abce',
        pageViewCount: 10,
      },
      {
        id: 'cl70evrc51264361inv0697ug2b',
        pageViewCount: 9,
      },
      {
        id: '610041e50d5e58000827affe',
        pageViewCount: 8,
      },
      {
        id: '6129325b7c747900084b47ea',
        pageViewCount: 7,
      },
      {
        id: '610afa3995c32e0008f5dfba',
        pageViewCount: 6,
      },
      {
        id: '610f21273367760009fc9e16',
        pageViewCount: 5,
      },
      {
        id: 'cl5x8vd7s9311891ipgcvwehueq',
        pageViewCount: 4,
      },
      {
        id: '62783f8aaaddc48932806ebe',
        pageViewCount: 3,
      },
      {
        id: 'clb4qsh3100800fmsx3u9eh06',
        pageViewCount: 2,
      },
      {
        id: '6147b784e9be480008b1f000',
        pageViewCount: 1,
      },
    ];

    return result;
    // return client
    //   .query(
    //     `['vercel']
    //       | where level == "info" and['fields.metric'] contains "Creator popularity" and['vercel.environment'] == "production"
    //       | summarize count() by ['fields.channelId'] | limit(${limit})`,
    //   )
    //   .then((res) =>
    //     res.buckets.totals?.map((total) => ({
    //       id: total.group['fields.channelId'] as string,
    //       pageViewCount: total.aggregations?.[0].value as number,
    //     })),
    //   );
  } catch (error) {
    if (error instanceof Error) {
      // eslint-disable-next-line no-console -- Working here...
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
export const getRisingCreators = async (
  // eslint-disable-next-line @typescript-eslint/no-unused-vars -- Working here...
  opts?: GetRisingCreators,
): Promise<
  | {
      id: string;
      pageViewCount: number;
    }[]
  | undefined
  // eslint-disable-next-line @typescript-eslint/require-await -- Working here...
> => {
  // const defaultOptions: Required<GetRisingCreators> = {
  //   limit: 10,
  //   skipTopCreators: 10,
  // };
  // const options = { ...defaultOptions, ...opts };
  // const { limit, skipTopCreators } = options;

  try {
    // if (limit > 1000) {
    //   throw new Error('Axiom queried for more than 1000 logs.');
    // }

    //   const topCreators = await client
    //     .query(
    //       `['vercel']
    //         | where level == "info" and['fields.metric'] contains "Creator popularity" and['vercel.environment'] == "production"
    //         | summarize count() by ['fields.channelId'] | limit(${skipTopCreators})`,
    //     )
    //     .then((res) =>
    //       res.buckets.totals?.map((total) => ({
    //         id: total.group['fields.channelId'] as string,
    //         pageViewCount: total.aggregations?.[0].value as number,
    //       })),
    //     );

    //   if (!topCreators) {
    //     throw new Error('No top creator list was found.');
    //   }

    // const topCreatorsToOmit = topCreators
    //   .map((creator) => `"${creator.id}"`)
    //   .join(', ');

    // const queryString = `
    // ['vercel']
    // | where level == "info" and['fields.metric'] contains "Creator popularity" and['vercel.environment'] == "production" and['fields.channelId'] !in~ (${topCreatorsToOmit})
    // | summarize count() by['fields.channelId']
    // | limit (10)
    // `;

    const result = [
      {
        id: '60f4680e52d0ef0008f46d12',
        pageViewCount: 10,
      },
      {
        id: '615879a3f4024d00090b0e5c',
        pageViewCount: 9,
      },
      {
        id: '61dd00966b502200099d41a4',
        pageViewCount: 8,
      },
      {
        id: '6234e026aaddc489322d539a',
        pageViewCount: 7,
      },
      {
        id: '62733ea3aaddc4893279e8d8',
        pageViewCount: 6,
      },
      {
        id: '62795656aaddc4893281a53e',
        pageViewCount: 5,
      },
      {
        id: 'cl7kvnajd4288361jqh5a1grc16',
        pageViewCount: 4,
      },
      {
        id: 'cldua7xy601770fmjo7jn1zou',
        pageViewCount: 3,
      },
      {
        id: 'cljntbvpl0000l50fzxdqh4y3',
        pageViewCount: 2,
      },
    ];

    // const result = await client.query(queryString).then((res) =>
    //   res.buckets.totals?.map((total) => ({
    //     id: total.group['fields.channelId'] as string,
    //     pageViewCount: total.aggregations?.[0].value as number,
    //   })),
    // );

    return result;
  } catch (error) {
    if (error instanceof Error) {
      // eslint-disable-next-line no-console -- Working here...
      console.error('Axiom querying error.');
      throw error;
    }

    throw new Error('Axiom querying error.');
  }
};
