import { Hero } from '@/app/(site)/components/Hero';
import { Games } from '@/app/(site)/components/Games';
import { LiveChannels } from '@/app/(site)/components/LiveChannels';
import { RisingChannels } from '@/app/(site)/components/RisingChannels';
import { TopChannels } from '@/app/(site)/components/TopChannels';
import { Blurb } from '@/app/(site)/components/Blurb';
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
