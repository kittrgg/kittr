import { db, games } from '@kittr/db';

export default async function Page() {
  const data = await db.select().from(games);

  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
