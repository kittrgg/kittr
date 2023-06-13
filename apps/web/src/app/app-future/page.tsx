import { Hero } from '@/app/app-future/components/Hero';

export const revalidate = 60;

function Page() {
  return (
    <div>
      <Hero />
      <h1>Hello, page.</h1>
      <p>How we doing?</p>
    </div>
  );
}

export default Page;
