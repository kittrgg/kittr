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
          <ChannelListItem
            linkComponent={linkComponent}
            linkBasePath={linkBasePath}
            key={channel.name}
            imageSrc={channel.imageSrc}
            name={channel.name}
            urlSafeName={channel.urlSafeName}
            isLive={channel.isLive}
          />
        );
      })}
    </div>
  );
};
