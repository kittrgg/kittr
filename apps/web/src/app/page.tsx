import { Hero } from '@/app/components/Hero';
import { Games } from '@/app/components/Games';
import { LiveChannels } from '@/app/components/LiveChannels';
import { RisingChannels } from '@/app/components/RisingChannels';
import { TopChannels } from '@/app/components/TopChannels';
import { Blurb } from '@/app/components/Blurb';
import { generateKittrMetadata } from '@/app/generateKittrMetadata';

export const revalidate = 60;

export const generateMetadata = () =>
  generateKittrMetadata({
    title: 'Home',
    description: 'get kittd.',
    canonicalURL: '/',
  });

function Page() {
  return (
    <div className="relative flex flex-col gap-16">
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
