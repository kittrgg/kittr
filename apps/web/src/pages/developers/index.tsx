import { trpc } from '@/lib/trpc';

function Page() {
  const { data } = trpc.healthCheck.useQuery();

  return <p>{JSON.stringify(data, null, 2)}</p>;
}

export default Page;
