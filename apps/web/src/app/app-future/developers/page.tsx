import { db, game } from '@kittr/db';

export default async function Page() {
  const data = await db.select().from(game);

  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
