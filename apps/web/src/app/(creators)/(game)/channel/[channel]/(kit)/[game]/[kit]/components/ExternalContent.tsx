import { cn, typographyVariants } from '@kittr/ui/new';
import { LightRay } from '@/app/(creators)/LightRay';
import { TikTokPlayer } from '@/app/(creators)/(game)/channel/[channel]/(kit)/[game]/[kit]/components/TikTokPlayer';
import { YouTubePlayer } from '@/app/(creators)/(game)/channel/[channel]/(kit)/[game]/[kit]/components/YouTubePlayer';
import type { Kits } from '@/app/(creators)/(game)/channel/[channel]/(kit)/[game]/[kit]/fetches';

type Kit = Kits[number];

export function ExternalContent({
  kit,
  youTubeAutoplay,
}: {
  kit: Kit;
  youTubeAutoplay: boolean;
}) {
  if (!kit.youtubeUrl && !kit.tiktokUrl) return null;

  return (
    <div className="relative flex flex-col gap-4">
      <LeftLight />
      <RightLight />

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
}

function LeftLight() {
  return (
    <LightRay className="absolute -left-[225px] -translate-y-1/2 top-1/2 w-[400px] h-[105%]" />
  );
}

function RightLight() {
  return (
    <LightRay className="absolute -right-[225px] -translate-y-1/2 top-1/2 w-[400px] h-[105%]" />
  );
}
