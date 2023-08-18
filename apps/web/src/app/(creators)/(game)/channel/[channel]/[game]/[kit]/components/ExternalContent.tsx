import { TikTokPlayer } from '@/app/(creators)/(game)/channel/[channel]/[game]/[kit]/components/TikTokPlayer';
import { YouTubePlayer } from '@/app/(creators)/(game)/channel/[channel]/[game]/[kit]/components/YouTubePlayer';
import type { Kits } from '@/app/(creators)/(game)/channel/[channel]/[game]/[kit]/fetches';
import { cn, typographyVariants } from '@kittr/ui/new';

type Kit = Kits[number];

export const ExternalContent = ({
  kit,
  youTubeAutoplay,
}: {
  kit: Kit;
  youTubeAutoplay: boolean;
}) => {
  if (!kit.youtubeUrl && !kit.tiktokUrl) return null;

  return (
    <div className="flex flex-col gap-2">
      <h3
        className={cn(typographyVariants({ presets: 'h3' }), 'text-zinc-300')}
      >
        Content
      </h3>
      <div className="flex flex-row justify-around gap-4">
        {kit.youtubeUrl ? (
          <YouTubePlayer
            autoplay={youTubeAutoplay}
            youTubeUrl={kit.youtubeUrl}
          />
        ) : null}
        {kit.tiktokUrl ? <TikTokPlayer /> : null}
      </div>
    </div>
  );
};
