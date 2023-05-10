import { GameCard, PlayerCard } from '@kittr/ui/new';
import '@kittr/ui/styles.css';

export default function Home() {
  return (
    <>
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
    </>
  );
}
