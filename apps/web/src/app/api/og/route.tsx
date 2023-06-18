import { ImageResponse } from 'next/server';

export const runtime = 'edge';
const baseURL = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : `http://localhost:${process.env.PORT || 3000}`;

// Now make it dynamic
export function GET(request: Request) {
  const title = new URL(request.url).searchParams.get('title') ?? 'get kittd.';

  return new ImageResponse(
    (
      <div tw="flex flex-row items-center justify-between w-full h-full text-6xl bg-zinc-900 text-white text-center">
        <img
          height={196}
          src={`${baseURL}/img/og-bg.png`}
          tw="absolute w-full h-full"
          width={192}
        />
        <div tw="flex flex-col ml-40">
          <div tw="pb-16">{title}</div>
          <div tw="text-4xl text-zinc-400">kittr</div>
        </div>

        <div tw="flex flex-col mr-40">
          <img
            height={196}
            src={`${baseURL}/img/logo-no-text.svg`}
            width={192}
          />
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 600,
    },
  );
}
