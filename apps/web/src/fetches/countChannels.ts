import { db, channel, sql } from '@kittr/db';

export const countChannels = async () =>
  db
    .select({
      count: sql<number>`count(*)`.mapWith(Number),
    })
    .from(channel)
    .then((res) => res[0]);
