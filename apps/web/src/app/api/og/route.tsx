import { ImageResponse } from 'next/server';
import { interBold, interRegular } from '@/app/api/og/fonts';

const baseURL = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : `http://localhost:${process.env.PORT || 3000}`;

export const runtime = 'edge';
export async function GET(request: Request) {
  const title = new URL(request.url).searchParams.get('title') ?? 'get kittd.';

  const [interBoldData, interRegularData] = await Promise.all([
    interBold,
    interRegular,
  ]);
  return new ImageResponse(
    (
      <div tw="flex flex-row items-center justify-between w-full h-full text-6xl bg-zinc-900 text-white text-center">
        <img
          height={196}
          src={`${baseURL}/img/og-bg.png`}
          tw="absolute w-full h-full"
          width={192}
        />
        <div style={{ fontFamily: 'Inter Bold' }} tw="flex flex-col ml-40">
          <div tw="pb-16">{title}</div>
          <div
            style={{ fontFamily: 'Inter Regular' }}
            tw="text-4xl text-zinc-400"
          >
            kittr
          </div>
        </div>
        <img
          height={196}
          src={`${baseURL}/img/logo-no-text.svg`}
          tw="absolute bottom-12 right-20"
          width={192}
        />
      </div>
    ),
    {
      width: 1200,
      height: 600,
      fonts: [
        {
          name: 'Inter Bold',
          data: interBoldData,
        },
        {
          name: 'Inter Regular',
          data: interRegularData,
        },
      ],
    },
  );
}
