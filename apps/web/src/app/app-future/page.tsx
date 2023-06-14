import { Hero } from '@/app/app-future/components/Hero';

export const revalidate = 60;

function Page() {
  return (
    <div>
      <Hero />
    </div>
  );
}

export default Page;
