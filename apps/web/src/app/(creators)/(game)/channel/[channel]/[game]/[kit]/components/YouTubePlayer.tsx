export function YouTubePlayer({
  autoplay,
  youTubeUrl,
}: {
  autoplay: boolean;
  youTubeUrl: string;
}) {
  const split = youTubeUrl.split('&t=');
  const youtubeId = split[0] || youTubeUrl;

  const youtubeString = new URL(`https://youtube.com/embed/${youtubeId}`);
  youtubeString.searchParams.append('autoplay', autoplay ? '1' : '0');
  youtubeString.searchParams.append('start', split[1]?.slice(0, -1) || '0');
  youtubeString.searchParams.append('rel', '0');

  return (
    <div className="relative flex flex-row overflow-hidden">
      <div className="w-full max-w-[575px] pb-[75%]">
        <iframe
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute top-0 left-0 w-full h-full"
          frameBorder="0"
          src={youtubeString.href}
          title="YouTube Player"
        />
      </div>
    </div>
  );
}
