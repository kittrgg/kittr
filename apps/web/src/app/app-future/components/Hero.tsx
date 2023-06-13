import { db, sql, warzoneKit, warzoneTwoKit } from '@kittr/db';

export async function Hero() {
  const wzKits = await db
    .select({ count: sql<number>`count(*)`.mapWith(Number) })
    .from(warzoneKit)
    .then((res) => res[0].count);

  const wz2Kits = await db
    .select({ count: sql<number>`count(*)`.mapWith(Number) })
    .from(warzoneTwoKit)
    .then((res) => res[0].count);

  return <p>{wzKits + wz2Kits} kits</p>;
}
