import { typographyVariants, cn } from '@kittr/ui/new';
import { MoveVertical, MoveHorizontal } from '@kittr/ui/icons';
import type { Kits } from '@/app/(creators)/(game)/channel/[channel]/(kit)/[game]/[kit]/fetches';

// Hacking in the types for showing tunings
type Option = Kits[number]['options'][number] & {
  horz?: number;
  vert?: number;
};

export function Options({ options }: { options: Option[] }) {
  return (
    <section className="flex flex-row flex-wrap justify-start gap-10 lg:justify-center">
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
            {opt.horz || opt.vert ? (
              <div className="flex flex-row justify-end gap-4">
                {opt.horz ? (
                  <p className="flex flex-row gap-1 text-zinc-300">
                    <MoveHorizontal /> {opt.horz}
                  </p>
                ) : null}
                {opt.vert ? (
                  <p className="flex flex-row gap-1 text-zinc-200">
                    <MoveVertical /> {opt.vert}
                  </p>
                ) : null}
              </div>
            ) : null}
          </div>
        );
      })}
    </section>
  );
}
