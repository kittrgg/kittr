import colors from '@Colors';
import AdPageWrapper from '@Components/layouts/AdPageWrapper';
import FallbackPage from '@Components/layouts/FallbackPage';
import { ChannelList, NoItemFound, Paginator } from '@Components/shared';
import { FirebaseStorageResolver } from '@Components/shared/FirebaseStorageResolver';
import { useViewportDimensions } from '@Hooks/useViewportDimensions';
import ResponsiveBanner from '@Services/venatus/ResponsiveBanner';
import { Routes } from '@Utils/lookups/routes';
import { prisma } from '@kittr/prisma';
import { createSSGHelper } from '@kittr/trpc/client';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { trpc } from '@/lib/trpc';

const CHANNELS_PER_PAGE = 10;

function GameProfile({ redirect }: { redirect: boolean }) {
  const { width } = useViewportDimensions();
  const { query, isFallback, push } = useRouter();
  const { pageNumber, game } = query as { pageNumber: string; game: string };

  const { data: gameData } = trpc.games.getByUrlSafeName.useQuery(game, {
    enabled: Boolean(game),
  });
  const { data: channelCount = 0 } = trpc.channels.count.useQuery(game, {
    enabled: Boolean(game),
  });
  const numberOfPages = Math.ceil(channelCount / CHANNELS_PER_PAGE);

  const { data: channels } = trpc.channels.games.list.useQuery(
    {
      urlSafeName: game,
      take: CHANNELS_PER_PAGE,
      skip: Number(Number(pageNumber) - 1) * CHANNELS_PER_PAGE,
    },
    { enabled: Boolean(game) },
  );

  if (redirect) {
    push(`/games/${game}`);
  }

  if (isFallback) return <FallbackPage />;

  const page = Number(pageNumber);
  if (!gameData || isNaN(page)) return <NoItemFound type="game" />;

  return (
    <AdPageWrapper
      description={`Check out who is playing ${gameData.displayName} on kittr.`}
      title={`${gameData.displayName} | kittr`}
    >
      {width < 1200 && <ResponsiveBanner />}
      <FlexRow>
        <FirebaseStorageResolver
          noSpinner
          path={gameData.backgroundImageUrl}
          render={(img) => <BackgroundImage backgroundImage={img} />}
        />
        <ImageContainer>
          <FirebaseStorageResolver
            noSpinner
            path={gameData.titleImageUrl}
            render={(img) => <Image alt={gameData.displayName} src={img} />}
          />
        </ImageContainer>
        <GameTitle>{gameData.displayName.toUpperCase()}</GameTitle>
      </FlexRow>

      <ChannelsContainer>
        <ChannelsTitle>CHANNELS</ChannelsTitle>
        {/* <ChannelSearch /> */}
        {channels?.length === 0 && (
          <>
            <p style={{ marginTop: '24px' }}>Hm, no channels here.</p>

            <Link
              href={Routes.GAMES.LIST}
              style={{
                display: 'block',
                marginTop: '24px',
                marginLeft: '24px',
                color: colors.white,
              }}
            >
              Back to Earth
            </Link>
          </>
        )}
        {channels && channels.length > 0 ? (
          <>
            <ChannelList
              data={channels}
              gameLink={game}
              itemBackgroundColor="#2F2F31"
            />
            <Paginator
              currentPage={page}
              currentPageResultEnd={page * 10 + 1}
              currentPageResultStart={(page - 1) * 10 + 1}
              isFirstPage={page === 1}
              isLastPage={page === numberOfPages}
              pageRoot={Routes.GAMES.createPath(game)}
              totalResults={channelCount ?? 0}
            />
          </>
        ) : null}
        {width < 1200 && (
          <ResponsiveBanner
            largeWidthAdUnit="d728x90"
            smallWidthAdUnit="s300x250"
          />
        )}
      </ChannelsContainer>
    </AdPageWrapper>
  );
}

export const getStaticPaths = async () => {
  const games = await prisma.game.findMany({
    orderBy: [
      {
        active: 'asc',
      },
      {
        displayName: 'desc',
      },
    ],
  });
  const paths = games.map((game) =>
    [1, 2, 3].map((elem: number) => ({
      params: {
        game: game.urlSafeName,
        pageNumber: String(elem),
      },
    })),
  );

  return {
    paths: paths.flat(),
    fallback: 'blocking',
  };
};

export const getStaticProps = async ({
  params,
}: {
  params: { game: string; pageNumber: string };
}) => {
  const { game, pageNumber } = params;

  const ssg = await createSSGHelper();

  const skip = Number(Number(pageNumber) - 1) * CHANNELS_PER_PAGE;

  if (isNaN(skip)) {
    return {
      props: {
        redirect: true,
      },
    };
  }

  const gameQuery = await ssg.games.getByUrlSafeName.fetch(game);
  if (gameQuery) {
    await Promise.all([
      await ssg.channels.count.fetch(game),

      await ssg.channels.games.list.fetch({
        urlSafeName: game,
        take: CHANNELS_PER_PAGE,
        skip,
      }),
    ]);
  }

  return {
    props: {
      trpcState: ssg.dehydrate(),
    },
    revalidate: 60,
  };
};

export default GameProfile;

// Styled Components

const FlexRow = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  padding: 60px;
`;

const BackgroundImage = styled.div<{ backgroundImage: string }>`
  position: absolute;
  inset: 0;
  background: linear-gradient(
      0deg,
      rgba(29, 29, 31, 1) 0%,
      rgba(29, 29, 31, 0.8) 50%,
      rgba(29, 29, 31, 1) 100%
    ),
    url('${(props) => props.backgroundImage}');
  background-size: cover;
  background-position: center;
  z-index: -1;
  filter: blur(5px);
`;

const ImageContainer = styled.div`
  width: 166px;
  min-width: 100px;
  box-shadow: 0px 0px 15px ${colors.black};
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  box-shadow: 0px 0px 15px #000000;
`;

const GameTitle = styled.h1`
  margin-top: 32px;
  font-family: 'Barlow Condensed', serif;
  font-size: 36px;
  font-weight: 900;
  letter-spacing: 3px;
`;
const ChannelsContainer = styled.div`
  padding: 0 60px;

  @media (max-width: 768px) {
    padding: 12px;
  }
`;

const ChannelsTitle = styled.h2`
  font-size: 22px;
  font-weight: 600;
  letter-spacing: 2px;
`;
