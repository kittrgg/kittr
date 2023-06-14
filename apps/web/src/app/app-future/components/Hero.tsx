import { db, sql, warzoneKit, warzoneTwoKit } from '@kittr/db';
import Image from 'next/image';

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
    <div className="flex flex-col justify-center gap-6">
      <h1 className="text-center text-6xl font-bold">get kittd.</h1>
      <p className="text-center text-xl font-bold text-gray-400">
        {Math.floor(totalNumberOfKits / 1000) * 1000}+ kits
      </p>
      <p className="text-wrap-balance mx-auto text-center text-lg font-semibold">
        Where streamers to share kits - and you use them.
      </p>
      <div className="relative aspect-[5/3] w-full">
        <Image
          alt="Screenshot of AgentScarn's profile"
          className="object-cover blur-md"
          fill
          priority
          src="/img/hero-screenie.jpg"
        />
        <Image
          alt="Screenshot of AgentScarn's profile"
          className="w-3/4 scale-95 object-cover"
          fill
          priority
          src="/img/hero-screenie.jpg"
        />
      </div>
    </div>
  );
}
