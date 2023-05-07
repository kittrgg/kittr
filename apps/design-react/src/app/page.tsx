import { GameCard, PlayerCard, Typography } from '@kittr/ui/new';
import '@kittr/ui/styles.css';

export default function Home() {
  return (
    <main className="min-h-screen flex-col justify-between p-24">
      {/* <HelloWorld /> */}

      <PlayerCard
        imageProps={{ src: 'https://placehold.co/128x128' }}
        isLive
        name="JoeWo"
      />
      <PlayerCard
        imageProps={{ src: 'https://placehold.co/128x128' }}
        isLive
        name="JoeWo"
      />

      <div>
        <GameCard
          developer="Infinity Ward"
          genres={['Battle Royale', 'FPS']}
          imageProps={{ src: 'https://placehold.co/160x256' }}
          platforms={['PC', 'PS4', 'XBOX']}
          title="Warzone 2.0"
        />

        <GameCard
          developer="Activision"
          genres={['Battle Royale', 'FPS']}
          imageProps={{ src: 'https://placehold.co/160x256' }}
          platforms={['PC', 'PS4', 'XBOX']}
          title="Warzone"
        />

        <GameCard
          developer="Riot Games"
          disabled
          genres={['MOBA']}
          imageProps={{ src: 'https://placehold.co/160x256' }}
          platforms={['PC']}
          title="League of Legends"
        />

        <GameCard
          developer="Battlestate Games"
          disabled
          genres={['FPS', 'Survival']}
          imageProps={{ src: 'https://placehold.co/160x256' }}
          platforms={['PC']}
          title="Escape from Tarkov"
        />

        <GameCard
          developer="Valve Corporation"
          disabled
          genres={['MOBA', 'Survival']}
          imageProps={{ src: 'https://placehold.co/160x256' }}
          platforms={['PC', 'PS4', 'XBOX']}
          title="Dota 2"
        />
      </div>

      <Typography.H1>H1. Heading</Typography.H1>
      <Typography.H2>H2. Heading</Typography.H2>
      <Typography.H3>H3. Heading</Typography.H3>
      <Typography.H4>H4. Heading</Typography.H4>
      <Typography.H5>H5. Heading</Typography.H5>
      <Typography.P>
        P. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam euismod
        libero vitae sollicitudin varius. Donec tristique nunc velit, et
        tincidunt orci lacinia quis. Aenean sed porta nibh, a scelerisque massa.
        Proin vitae tempor risus. Curabitur pharetra, urna id commodo
        ullamcorper, velit lorem efficitur nisl, ac pharetra tellus elit eu sem.
        Vestibulum quis libero vel dui iaculis venenatis. Morbi tincidunt lacus
        vel diam venenatis, in sagittis massa elementum.
      </Typography.P>
      <Typography.BlockQuote>
        BlockQuote. Proin euismod nisl porttitor dui tristique condimentum. Cras
        commodo sem eget iaculis lobortis. Suspendisse congue tincidunt ligula,
        vel tristique diam dignissim non. Suspendisse elementum dolor a
        dignissim dapibus. Ut ornare eros sit amet vehicula tincidunt. Vivamus
        non diam sed ipsum euismod viverra quis eget lectus. In hac habitasse
        platea dictumst. Donec sodales, leo euismod mollis fringilla, ante dui
        rutrum sem, sit amet luctus enim justo non velit. Vestibulum varius arcu
        eu felis condimentum dignissim. Quisque sit amet urna mauris.
      </Typography.BlockQuote>
    </main>
  );
}
