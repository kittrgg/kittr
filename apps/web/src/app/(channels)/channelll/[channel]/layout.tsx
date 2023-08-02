import '../../../globals.css';

import type { ReactNode } from 'react';
import { generateKittrMetadata } from '@/app/generateKittrMetadata';
import { AppWrapper } from '@/app/(channels)/channelll/[channel]/AppWrapper';
import type { GenerateKittrMetadataArgs } from '@/app/generateKittrMetadata';
import { inter } from '@/app/fonts';

export const generateMetadata = () => {
  return {
    ...generateKittrMetadata({
      title: 'kittr',
      description: 'The content platform. Get kittd.',
    } as GenerateKittrMetadataArgs),
    metadataBase: process.env.VERCEL_URL
      ? new URL(`https://${process.env.VERCEL_URL}`)
      : new URL(`http://localhost:${process.env.PORT || 3000}`),
  };
};

export function Layout({
  sidebar,
  body,
}: {
  sidebar: ReactNode;
  body: ReactNode;
}) {
  return (
    <html className={`${inter.variable}`} lang="en">
      <body className="flex flex-row justify-center flex-grow w-full m-auto font-sans antialiased bg-zinc-800 ">
        <AppWrapper body={body} sidebar={sidebar} />
      </body>
    </html>
  );
}

export default Layout;
