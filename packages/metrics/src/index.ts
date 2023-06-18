import { logError } from '@kittr/logger/nextjs';
import { getErrorMessage } from '@kittr/utils';
import { client } from './client';

export { log } from 'next-axiom';

interface GetCreatorPopularities {
  limit: number;
}

const defaultOptions: GetCreatorPopularities = {
  limit: 10,
};

export const getCreatorPopularities = async (
  opts?: Partial<GetCreatorPopularities>,
) => {
  const options = { ...defaultOptions, ...opts };
  const { limit } = options;

  try {
    if (limit > 1000) {
      throw new Error('Axiom queried for more than 1000 logs.');
    }

    return client
      .query(
        `['vercel']
          | where level == "info" and ['fields.metric'] contains "Creator popularity" and ['vercel.environment'] == "production"
          | summarize count() by ['fields.channelId'] | limit(${limit})`,
      )
      .then((res) =>
        res.buckets.totals?.map((total) => ({
          id: total.group['fields.channelId'] as string,
          total: total.aggregations?.[0].value as number,
        })),
      );
  } catch (error) {
    if (error instanceof Error) {
      logError(error);
      throw error;
    }

    logError(getErrorMessage(error));
    throw new Error('Axiom querying error.');
  }
};

// Below is an example usage for when we want to begin using this code.
// const popularities = await getCreatorPopularities();

// if (!popularities) {
//   return null;
// }

// const channels = await Promise.all(
//   popularities.map(async (channel) => {
//     const profile = await db
//       .select()
//       .from(ChannelTable)
//       .where(eq(ChannelTable.id, channel.id))
//       .then((res) => res[0]);

//     // UNCOMMENT THIS ANY TIME AFTER JULY 17
//     // profile.viewCount = channel.total;
//     return profile;
//   }),
// );
