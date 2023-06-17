import { Client } from '@axiomhq/axiom-node';
import { db, channel as ChannelTable, eq } from '@kittr/db';

async function Page() {
  const client = new Client({
    token: process.env.AXIOM_PERSONAL_TOKEN,
    orgId: process.env.AXIOM_ORG_ID,
  });

  const data = await client
    .query(
      `['vercel']
         | where level == "info" and ['fields.metric'] contains "Creator popularity" and ['vercel.environment'] == "production"
        | summarize count() by ['fields.channelId'] | limit(3)`,
    )
    .then((res) => res.buckets.totals);

  if (!data) {
    return null;
  }

  const channels = await Promise.all(
    data.map(async (channel) => {
      return db
        .select()
        .from(ChannelTable)
        .where(eq(ChannelTable.id, channel.group['fields.channelId']));
    }),
  );

  return (
    <div>
      <pre>{JSON.stringify(channels, null, 2)}</pre>
    </div>
  );
}

export default Page;
