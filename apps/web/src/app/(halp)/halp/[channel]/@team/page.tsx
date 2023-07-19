import { getChannel } from '@/fetches/getChannel';

async function Page({ params }: { params: { channel: string } }) {
  const channel = await getChannel(params.channel);
  return (
    <div>
      <p>team: {params.channel}</p>
      <pre>{JSON.stringify(channel, null, 2)}</pre>
    </div>
  );
}

export default Page;
