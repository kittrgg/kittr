import type { Metadata } from 'next';
import { Hero } from '@/app/app-future/components/Hero';
import { Games } from '@/app/app-future/components/Games';
import { LiveChannels } from '@/app/app-future/components/LiveChannels';
import { RisingChannels } from '@/app/app-future/components/RisingChannels';
import { TopChannels } from '@/app/app-future/components/TopChannels';
import { Blurb } from '@/app/app-future/components/Blurb';

export const revalidate = 60;

export const metadata: Metadata = {
  title: 'Home | kittr',
  description: 'get kittd.',
};

function Page() {
  return (
    <div className="flex flex-col gap-16">
      <Hero />
      <Games />
      <LiveChannels />
      <TopChannels />
      <RisingChannels />
      <Blurb />
    </div>
  );
}

export default Page;
