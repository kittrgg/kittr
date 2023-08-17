import type { getKits } from '@/app/(creators)/(game)/channel/[channel]/[game]/[kit]/fetches';

export function KitSelector({
  kits,
}: {
  kits: Awaited<ReturnType<typeof getKits>>;
}) {
  return (
    <div className="z-10">
      {kits.map((kit) => {
        return (
          <div key={kit.id}>
            {kit.base.displayName} - {kit.customTitle}
          </div>
        );
      })}
    </div>
  );
}
