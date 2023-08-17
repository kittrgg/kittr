import { TikTokPlayer } from '@/app/(creators)/(game)/channel/[channel]/[game]/[kit]/components/TikTokPlayer';
import { YouTubePlayer } from '@/app/(creators)/(game)/channel/[channel]/[game]/[kit]/components/YouTubePlayer';
import type { Kits } from '@/app/(creators)/(game)/channel/[channel]/[game]/[kit]/fetches';

export function Content({
  kit,
  youTubeAutoplay,
}: {
  kit: Kits[number];
  youTubeAutoplay: boolean;
}) {
  return (
    <div className="relative z-10 flex flex-col">
      <div className="flex flex-col gap-2">
        {kit.options.map((opt) => {
          return (
            <div key={opt.id}>
              <p>{opt.slotKey}</p>
              <p>{opt.displayName}</p>
            </div>
          );
        })}
      </div>
      <p>{kit.base.blurb}</p>
      <p>popularity</p>
      {kit.youtubeUrl ? (
        <YouTubePlayer autoplay={youTubeAutoplay} youTubeUrl={kit.youtubeUrl} />
      ) : null}
      {kit.tiktokUrl ? <TikTokPlayer /> : null}
    </div>
  );
}
