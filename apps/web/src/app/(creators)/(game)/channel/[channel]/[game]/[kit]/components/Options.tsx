import { typographyVariants, cn } from '@kittr/ui/new';
import type { Kits } from '@/app/(creators)/(game)/channel/[channel]/[game]/[kit]/fetches';

// Hacking in the types for showing tunings
type Option = Kits[number]['options'][number] & {
  tuning?: { horz: number; vert: number }[];
};

export function Options({ options }: { options: Option[] }) {
  return (
    <div className="flex flex-row flex-wrap justify-start gap-10 lg:justify-center">
      {options.map((opt) => {
        return (
          <div
            className="flex flex-col gap-2 p-6 border border-white bg-zinc-800/30 rounded-lg w-full lg:min-w-[400px] border-opacity-5 lg:w-fit"
            key={opt.id}
          >
            <p
              className={cn(
                typographyVariants({ presets: 'h2' }),
                'text-zinc-300',
              )}
            >
              {opt.slotKey}
            </p>
            <p className={typographyVariants({ presets: 'h4' })}>
              {opt.displayName}
            </p>
            <div className="flex flex-row gap-4">
              {opt.tuning?.[0].horz ? (
                <p className="text-zinc-300">
                  Horizontal: {opt.tuning[0].horz}
                </p>
              ) : null}
              {opt.tuning?.[0].vert ? (
                <p className="text-zinc-200">Vertical: {opt.tuning[0].vert}</p>
              ) : null}
            </div>
          </div>
        );
      })}
    </div>
  );
}
