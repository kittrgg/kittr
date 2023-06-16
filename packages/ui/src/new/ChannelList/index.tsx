'use client';

import type { ChannelListItemProps } from './Item';
import { ChannelListItem } from './Item';

export interface ChannelListProps {
  // Typed copied from next/link internals
  linkComponent: React.ForwardRefExoticComponent<
    Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> &
      React.RefAttributes<HTMLAnchorElement> & {
        children?: React.ReactNode;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } & { href: any }
  >;
  linkBasePath: string;
  channels: Omit<ChannelListItemProps, 'linkBasePath' | 'linkComponent'>[];
  disableResponsive?: boolean;
}

export const ChannelList = ({
  channels,
  linkBasePath,
  linkComponent,
  disableResponsive,
}: ChannelListProps) => {
  return (
    <div
      className={`grid grid-cols-1 gap-4 ${
        disableResponsive ? '' : 'lg:grid-cols-3 xl:grid-cols-4'
      }`}
    >
      {channels.map((channel) => {
        return (
          // I'm having to use ignore here because we're bleeding edge.
          // eslint-disable-next-line @typescript-eslint/prefer-ts-expect-error, @typescript-eslint/ban-ts-comment
          // @ts-ignore Async components working in Next.js but not in here yet
          <ChannelListItem
            linkComponent={linkComponent}
            linkBasePath={linkBasePath}
            key={channel.name}
            imageSrc={channel.imageSrc}
            name={channel.name}
            urlSafeName={channel.urlSafeName}
          />
        );
      })}
    </div>
  );
};
