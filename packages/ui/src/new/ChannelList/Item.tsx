import { Slot } from '@radix-ui/react-slot';
import { ChevronRight } from 'lucide-icons-react';
import { download } from '@kittr/firebase/storage';
import { AvatarFallback, Avatar, AvatarImage } from '../Avatar';
import { P, typographyVariants } from '../Typography';
import { cn } from '../utils';

export interface ChannelListItemProps {
  // Typed copied from next/link internals
  linkComponent: React.ForwardRefExoticComponent<
    Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> &
      React.RefAttributes<HTMLAnchorElement> & {
        children?: React.ReactNode;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } & { href: any }
  >;
  linkBasePath: string;
  id: string;
  name: string;
  urlSafeName: string;
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
//   socials: ChannelListItemProps['socials'];
// }): {
//   property: keyof ChannelListItemProps['socials'];
//   url: string;
// }[] => {
//   const arrToBuild: ReturnType<typeof socialSort> = [];
//   const entries = Object.entries(socials);
//   socialIconsOrder.forEach((social) => {
//     const found = entries.find((entry) => entry[0] === social);
//     if (found) {
//       arrToBuild.push({
//         property: found[0] as keyof ChannelListItemProps['socials'],
//         url: formatLink(found[1]),
//       });
//     }
//   });

//   return arrToBuild;
// };

const ShineLoader = () => {
  return <div className="w-full h-full animate-pulse bg-zinc-700" />;
};

export const ChannelListItem = async ({
  id,
  name,
  linkComponent,
  linkBasePath,
  urlSafeName,
}: ChannelListItemProps) => {
  const LinkComponent = linkComponent;
  const formattedLinkBase = linkBasePath.endsWith('/')
    ? linkBasePath
    : `${linkBasePath}/`;
  return (
    <Slot className="flex flex-row items-center justify-between gap-4 p-4 transition-all rounded-xl bg-zinc-800 hover:bg-zinc-700">
      <LinkComponent href={`${formattedLinkBase}${urlSafeName}`}>
        <div className="relative flex flex-row items-center flex-shrink w-4/5 gap-6  m-w-0">
          <Avatar>
            <AvatarFallback>
              <ShineLoader />
            </AvatarFallback>
            <AvatarImage
              className="animation-fadeIn"
              src={await download(id)}
              alt={name}
            />
            <span className="absolute z-50">live</span>
          </Avatar>
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
