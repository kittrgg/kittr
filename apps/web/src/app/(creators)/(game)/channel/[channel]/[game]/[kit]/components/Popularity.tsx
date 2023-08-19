import { cn, typographyVariants } from '@kittr/ui/new';

export function Popularity() {
  const viewCount = 40;
  const gameViewCount = 400;
  const game = 'Warzone 2';

  return (
    <section className="flex flex-col gap-4">
      <h3
        className={cn(typographyVariants({ presets: 'h3' }), 'text-zinc-300')}
      >
        Popularity
      </h3>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
        <PopularityCard
          lineOne="Kit views"
          lineTwo="Creator only"
          number={viewCount}
        />
        <PopularityCard
          lineOne="Weapon views"
          lineTwo="All creators"
          number={gameViewCount}
        />
        <PopularityCard
          fractionDenominator={42}
          lineOne="Most viewed"
          lineTwo={game}
          number={31}
        />
      </div>
    </section>
  );
}

function PopularityCard({
  number,
  lineOne,
  fractionDenominator,
  lineTwo,
}: {
  number: number;
  fractionDenominator?: number;
  lineOne: string;
  lineTwo: string;
}) {
  return (
    <div className="flex flex-col items-center gap-4 p-8 border rounded-md border-zinc-800 bg-gradient-to-t from-zinc-900 to-zinc-800">
      <div className="flex flex-row items-end gap-2">
        <p className="text-4xl font-semibold">{number}</p>
        {fractionDenominator ? (
          <p className="text-xl font-semibold text-zinc-400">
            / {fractionDenominator}
          </p>
        ) : null}
      </div>
      <div className="flex flex-col items-center gap-1">
        <p className="text-lg font-semibold">{lineOne}</p>
        <p className="text-sm text-zinc-200">{lineTwo}</p>
      </div>
    </div>
  );
}
