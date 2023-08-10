'use client';

import { Slot } from '@radix-ui/react-slot';
import { ChevronRight } from 'lucide-icons-react';
import { User } from '../../icons';
import { Avatar } from '../Avatar';
import { P, typographyVariants } from '../Typography';
import { cn } from '../utils';
import type { NextLinkType } from '../../../utils';

export interface CreatorListItemProps {
  id: string;
  hasAvatar: boolean;
  linkComponent: NextLinkType;
  linkBasePath: string;
  name: string;
  urlSafeName: string;
  isLive?: boolean;
}

// LEGACY: Make sure that the link is converted to a hyperlink if it is incomplete from the database.
// const formatLink = (link: string) => {
//   if (!link.startsWith('https://')) return `https://${link}`;
//   return link;
// };

// const socialIconsOrder = [
//   'twitch',
//   'youtube',
//   'twitter',
//   'tiktok',
//   'instagram',
//   'discord',
// ];

// const socialSort = ({
//   socials,
// }: {
//   socials: CreatorListItemProps['socials'];
// }): {
//   property: keyof CreatorListItemProps['socials'];
//   url: string;
// }[] => {
//   const arrToBuild: ReturnType<typeof socialSort> = [];
//   const entries = Object.entries(socials);
//   socialIconsOrder.forEach((social) => {
//     const found = entries.find((entry) => entry[0] === social);
//     if (found) {
//       arrToBuild.push({
//         property: found[0] as keyof CreatorListItemProps['socials'],
//         url: formatLink(found[1]),
//       });
//     }
//   });

//   return arrToBuild;
// };

export const CreatorListItem = ({
  name,
  linkComponent,
  id,
  hasAvatar,
  linkBasePath,
  urlSafeName,
  isLive,
}: CreatorListItemProps) => {
  const LinkComponent = linkComponent;
  const formattedLinkBase = linkBasePath.endsWith('/')
    ? linkBasePath
    : `${linkBasePath}/`;

  return (
    <Slot className="flex flex-row items-center justify-between gap-4 p-4 transition-all rounded-xl bg-zinc-800 hover:bg-zinc-700">
      <LinkComponent
        href={`${formattedLinkBase}${urlSafeName}`}
        prefetch={false}
      >
        <div className="relative flex flex-row items-center flex-shrink w-4/5 gap-6 m-w-0">
          {hasAvatar ? (
            // eslint-disable-next-line @typescript-eslint/prefer-ts-expect-error, @typescript-eslint/ban-ts-comment
            // @ts-ignore Async component outside of Next.js context
            <p>An avatar goes here.</p>
          ) : (
            // <Avatar
            //   id={id}
            //   hasProfileImg={hasAvatar}
            //   username={name}
            //   isLive={isLive}
            // />
            <div className="text-gray-500 flex justify-center items-center overflow-hidden border w-[40px] h-[40px] border-gray-500 rounded-full">
              <User strokeWidth={0.75} width={30} height={30} />
            </div>
          )}
          <P
            className={cn(
              'm-w-0 w-4/5 flex-shrink truncate',
              typographyVariants({ presets: 'h4' }),
            )}
          >
            {name}
          </P>
        </div>
        <ChevronRight className="z-10 flex-grow-0 flex-shrink-0" />
      </LinkComponent>
    </Slot>
  );
};
