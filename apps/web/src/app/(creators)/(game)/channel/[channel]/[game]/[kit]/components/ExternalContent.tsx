import { cn, typographyVariants } from '@kittr/ui/new';
import { TikTokPlayer } from '@/app/(creators)/(game)/channel/[channel]/[game]/[kit]/components/TikTokPlayer';
import { YouTubePlayer } from '@/app/(creators)/(game)/channel/[channel]/[game]/[kit]/components/YouTubePlayer';
import type { Kits } from '@/app/(creators)/(game)/channel/[channel]/[game]/[kit]/fetches';

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
    <div className="absolute left-0 -translate-y-1/2 top-1/3">
      <div className="absolute inset-0 w-16 h-[30rem] bg-stone-600">
        <div className="absolute z-0 overflow-visible text-black -inset-40 backdrop-blur-3xl rounded-3xl" />
      </div>
      <div className="absolute inset-0 w-16 h-[30rem] bg-zinc-600">
        <div className="absolute z-0 overflow-visible text-black -inset-40 backdrop-blur-2xl rounded-3xl" />
      </div>
    </div>
  );
}

function RightLight() {
  return (
    <div className="absolute right-0 -translate-y-1/2 top-1/3">
      <div className="absolute inset-0 w-16 h-[30rem] bg-stone-600">
        <div className="absolute z-0 overflow-visible text-black -inset-40 backdrop-blur-3xl rounded-3xl" />
      </div>
      <div className="absolute inset-0 w-16 h-[30rem] bg-zinc-600">
        <div className="absolute z-0 overflow-visible text-black -inset-40 backdrop-blur-2xl rounded-3xl" />
      </div>
    </div>
  );
}
