import { db, sql, warzoneKit, warzoneTwoKit } from '@kittr/db';
import { Cobe } from './Cobe';

export async function Hero() {
  const wzKits = await db
    .select({ count: sql<number>`count(*)`.mapWith(Number) })
    .from(warzoneKit)
    .then((res) => res[0].count);

  const wz2Kits = await db
    .select({ count: sql<number>`count(*)`.mapWith(Number) })
    .from(warzoneTwoKit)
    .then((res) => res[0].count);

  const totalNumberOfKits = wzKits + wz2Kits;

  return (
    <div className="relative flex flex-col justify-center gap-6 min-h-[600px] -m-8">
      <Cobe />
      <h1 className="relative z-20 text-6xl font-bold text-center">
        get kittd.
      </h1>
      <p className="relative z-20 text-xl font-bold text-center text-gray-400">
        {Math.floor(totalNumberOfKits / 1000) * 1000}+ kits
      </p>
      <p className="relative z-20 mx-auto text-lg font-semibold text-center text-wrap-balance">
        Where streamers share kits - and you use them.
      </p>
    </div>
  );
}
