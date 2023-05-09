import PageWrapper from '@Components/layouts/PageWrapper';
import ResponsiveAdBanner from '@Services/venatus/ResponsiveBanner';
import { createSSGHelper } from '@kittr/trpc/server';
import Body from '@Features/Home/Body';
import Hero from '@Features/Home/Hero';
import PlatformInfo from '@Features/Home/PlatformInfo';
import { trpc } from '@/lib/trpc';
// import { trpc } from "@/lib/trpc"

function Home() {
  const { data: games } = trpc.games.count.useQuery();
  const { data: totalNumberOfKits } = trpc.kits.count.useQuery();
  const { data: popularChannels } = trpc.channels.top.useQuery({ take: 10 });
  const { data: risingChannels } = trpc.channels.rising.useQuery();
  const { data: liveChannels } = trpc.channels.live.useQuery();

  if (!totalNumberOfKits) return null;

  return (
    <PageWrapper
      description="Where the pros post their kits. Get kitted."
      title="Home | kittr"
    >
      <Hero totalNumberOfKits={Math.floor(totalNumberOfKits / 1000) * 1000} />
      <ResponsiveAdBanner />
      <Body
        games={games}
        liveChannels={liveChannels?.slice(0, 15)}
        popularChannels={popularChannels}
        risingStars={risingChannels}
      />
      <ResponsiveAdBanner />
      <PlatformInfo />
      <ResponsiveAdBanner
        largeWidthAdUnit="d728x90"
        smallWidthAdUnit="s300x250"
      />
    </PageWrapper>
  );
}

export default Home;

export const getStaticProps = async () => {
  const ssg = await createSSGHelper();

  await Promise.all([
    await ssg.kits.count.fetch(),
    await ssg.games.list.fetch(),
    await ssg.channels.top.fetch({ take: 10 }),
    await ssg.channels.rising.fetch(),
    await ssg.channels.live.fetch(),
  ]);

  return {
    props: {
      trpcState: ssg.dehydrate(),
    },
    revalidate: 60,
  };
};
