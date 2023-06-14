import { Hero } from '@/app/app-future/components/Hero';
import { Games } from '@/app/app-future/components/Games';
import { LiveChannels } from '@/app/app-future/components/LiveChannels';
import { RisingChannels } from '@/app/app-future/components/RisingChannels';
import { TopChannels } from '@/app/app-future/components/TopChannels';

export const revalidate = 60;

function Page() {
  return (
    <div className="flex flex-col gap-16">
      <Hero />
      <Games />
      <LiveChannels />
      <TopChannels />
      <RisingChannels />
    </div>
  );
}

export default Page;
