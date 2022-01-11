const { BetaAnalyticsDataClient } = require("@google-analytics/data");
const Player = require("../models/Player").default;

const analyticsDataClient = new BetaAnalyticsDataClient({
  credentials: JSON.parse(process.env.GOOGLE_APPLICATION_CREDENTIALS),
});

const analyticsReportSchemas = {
  property: `properties/276805067`,
  metrics: [
    {
      name: "screenPageViews",
    },
  ],
  dimensions: [
    {
      name: "pagePath",
    },
  ],
};

/**
 *
 * @param {*} dateRange A object of startDate and endDate, as strings with the form of YYYY-MM-DD
 * @returns
 */
const getStreamerViewCounts = async (dateRange) => {
  try {
    const [response] = await analyticsDataClient.runReport({
      ...analyticsReportSchemas,
      dateRanges: [dateRange],
      dimensionFilter: {
        andGroup: {
          expressions: [
            {
              filter: {
                fieldName: "pagePath",
                stringFilter: {
                  matchType: "BEGINS_WITH",
                  value: "/channel/",
                },
              },
            },
          ],
        },
      },
    });

    return response.rows.reduce((acc, row) => {
      /**
       * This splits the string coming in as the example below:
       *
       * /players/HusKerrs/warzone"
       *
       * "", "players", "HusKerrs", "warzone"
       *
       * returns HusKerrs
       */
      const streamer = row.dimensionValues[0].value.split("/").slice(0, 3)[2];

      // If streamer counts already exist in object, add new counts to existing
      if (acc[streamer]) {
        const count = acc[streamer];
        acc[streamer] = count + parseFloat(row.metricValues[0].value);
      } else {
        acc[streamer] = parseFloat(row.metricValues[0].value);
      }
      return acc;
    }, {});
  } catch (error) {
    console.log({ error });
    return error;
  }
};

const writeViewCounts = async () => {
  const now = new Date();
  let monthAgo = new Date();
  monthAgo.setMonth(now.getMonth() - 1);

  const streamerData = await getStreamerViewCounts({
    startDate: `${monthAgo.getUTCFullYear()}-${
      monthAgo.getUTCMonth() + 1
    }-${monthAgo.getUTCDate()}`,
    endDate: `${now.getUTCFullYear()}-${
      now.getUTCMonth() + 1
    }-${now.getUTCDate()}`,
  });

  const bulkWrites = Object.entries(streamerData).map(
    ([urlSafeName, viewCount]) => ({
      updateOne: {
        filter: { urlSafeName: urlSafeName },
        update: { $set: { viewCount: viewCount } },
      },
    })
  );
  console.log("Starting bulk write...");
  console.time("Bulk Write Operation");
  await Player.bulkWrite([
    ...bulkWrites,
    {
      updateMany: {
        filter: { displayName: { $nin: Object.keys(streamerData) } },
        update: { $set: { viewCount: 0 } },
      },
    },
  ]);
  console.timeEnd("Bulk Write Operation");
  console.log("Bulk write finished?!");
};

exports.writeViewCounts = writeViewCounts;
