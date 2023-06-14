import { H2, ChannelList } from '@kittr/ui/new';
import Link from 'next/link';
import { risingChannels } from '@/fetches/risingChannels';

export const RisingChannels = async () => {
  const channels = await risingChannels();

  return (
    <section className="flex flex-col gap-4">
      <H2>Rising Channels</H2>
      <ChannelList
        channels={channels.map((channel) => {
          return {
            name: channel.displayName,
            urlSafeName: channel.urlSafeName,
            id: channel.id,
          };
        })}
        linkBasePath="/channel"
        linkComponent={Link}
      />
    </section>
  );
};
