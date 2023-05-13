// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable no-console */
import type { NextApiRequest, NextApiResponse } from 'next';
import { BetaAnalyticsDataClient } from '@google-analytics/data/build/src/v1beta';
import { prisma } from '@kittr/prisma';
import type { StreamerViewCounts } from '@kittr/types';

const analyticsDataClient = new BetaAnalyticsDataClient({
  credentials: {
    client_email: process.env.FIREBASE_CLIENT_EMAIL,
    private_key: process.env.FIREBASE_ADMIN_PRIVATE_KEY
  }
});

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse,
) {
  if (request.query.secret !== process.env.CRON_SECRET_KEY) {
    return response.status(404).end();
  }

  const analyticsReportSchemas = {
    property: 'properties/276805067',
    metrics: [
      {
        name: 'screenPageViews',
      },
    ],
    dimensions: [
      {
        name: 'pagePath',
      },
    ],
  };

  const getChannelViewCounts = async (
    dateRange: StreamerViewCounts,
  ): Promise<Record<string, number>> => {
    console.log('Trying to get streamer view counts...');

    try {
      const [report] = await analyticsDataClient.runReport({
        ...analyticsReportSchemas,
        dateRanges: [dateRange],
        dimensionFilter: {
          andGroup: {
            expressions: [
              {
                filter: {
                  fieldName: 'pagePath',
                  stringFilter: {
                    matchType: 'BEGINS_WITH',
                    value: '/channel/',
                  },
                },
              },
            ],
          },
        },
      });

      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      return report.rows!.reduce<Record<string, number>>((acc, row) => {
        /**
         * This splits the string coming in as the example below:
         *
         * /players/HusKerrs/warzone"
         *
         * "", "players", "HusKerrs", "warzone"
         *
         * returns HusKerrs
         */
        const streamer =
          row.dimensionValues?.[0].value?.split('/').slice(0, 3)[2] ?? '';

        // If streamer counts already exist in object, add new counts to existing
        if (acc[streamer]) {
          const count = acc[streamer];
          acc[streamer] = count + parseFloat(row.metricValues?.[0].value ?? '');
        } else {
          acc[streamer] = parseFloat(row.metricValues?.[0].value ?? '');
        }
        return acc;
      }, {});
    } catch (error) {
      console.log({ error });
      throw error;
    }
  };

  const writeViewCounts = async () => {
    const now = new Date();
    const monthAgo = new Date();
    monthAgo.setMonth(now.getMonth() - 1);

    const channelData = await getChannelViewCounts({
      startDate: `${monthAgo.getUTCFullYear()}-${monthAgo.getUTCMonth() + 1
        }-${monthAgo.getUTCDate()}`,
      endDate: `${now.getUTCFullYear()}-${now.getUTCMonth() + 1
        }-${now.getUTCDate()}`,
    });

    const bulkWrites = Object.entries(channelData);
    console.log('Starting bulk write...');
    await prisma.$transaction(
      bulkWrites.map(([channelUrlSafeName, viewCount]) =>
        prisma.channel.updateMany({
          where: {
            urlSafeName: channelUrlSafeName,
          },
          data: {
            viewCount,
          },
        }),
      ),
    );

    console.log('Bulk write for view counts finished!');
  }
  await writeViewCounts()
  return response.status(200).json({ success: true })
}